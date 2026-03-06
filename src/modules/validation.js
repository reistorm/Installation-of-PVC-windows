const validation = () => {
    const form = document.querySelector('.form-horizontal')
    const formName = document.getElementById('form-name')
    const formPhone = document.getElementById('form-phone')

    formName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\a-zA-Z]/gi, '')
    })

    formPhone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\+]/g, '')
        if (e.target.value.length > 16) {
            e.target.value = ''
        }
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const formNameValue = formName.value.trim()
        const formPhoneValue = formPhone.value.trim()

        if (!formNameValue || !formPhoneValue) {
            return;
        }

        const formData = {
            name: formNameValue,
            phone: formPhoneValue
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка сети или сервера')
                }
                return response.json()
            })
            .then(() => {
                alert('Форма успешно отправлена!')
                e.target.reset();
            })
            .catch(() => alert('Ошибка при отправке'))

    })

}

export default validation