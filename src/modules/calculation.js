const calculation = () => {
    const calcBlock = document.getElementById('calc')
    const calcType = document.getElementById('calc-type')
    const calcTypeMaterial = document.getElementById('calc-type-material')
    const calcInput = document.getElementById('calc-input')
    const calcTotal = document.getElementById('calc-total')

    if (!calcBlock) return;

    const countCalc = () => {
        if (calcType.value === '--' || calcTypeMaterial.value === '--' || !calcInput.value) {
            calcTotal.value = '';
            return;
        }

        const calcTypeValue = +calcType.value
        const calcTypeMaterialValue = +calcTypeMaterial.value
        let calcInputValue = +calcInput.value;
        const totalValue = calcTypeValue * calcTypeMaterialValue * calcInputValue

        calcTotal.value = totalValue
    }

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcInput) {
            e.target.value = e.target.value.replace(/\D/g, '')
        }
        if (e.target === calcType || e.target === calcTypeMaterial || e.target === calcInput) {
            countCalc()
        }
    })
}

export default calculation