const validation = () => {
    const forms = document.querySelectorAll('.form-horizontal')

    forms.forEach((form) => {
        const formName = form.querySelector('.form-name')
        const formPhone = form.querySelector('.form-phone')

        if (formName) {
            formName.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\a-zA-Z]/gi, '')
            })
        }

        if (formPhone) {
            formPhone.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9\+]/g, '')
                if (e.target.value.length > 16) {
                    e.target.value = e.target.value.slice(0, 16)
                }
            })
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()

            const formNameValue = formName ? formName.value.trim() : ''
            const formPhoneValue = formPhone ? formPhone.value.trim() : ''

            if (!formNameValue || !formPhoneValue) {
                return;
            }

            const formData = {
                name: formNameValue,
                phone: formPhoneValue
            }
            const calcType = document.getElementById('calc-type');
            const calcTypeMaterial = document.getElementById('calc-type-material');
            const calcInput = document.getElementById('calc-input');
            const calcTotal = document.getElementById('calc-total')

            if (calcTotal && calcTotal.value) {
                formData['calc-total'] = calcTotal.value
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
                    if (calcType) calcType.value = '--';
                    if (calcTypeMaterial) calcTypeMaterial.value = '--';
                    if (calcInput) calcInput.value = '';
                    if (calcTotal) calcTotal.value = '';
                })
                .catch(() => alert('Ошибка при отправке'))
        })
    })


}

export default validation