let num1 = '';
let num2 = '';
let operation = '';
let flag = false;
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operations = ['+', '-', '*', '/', '.'];
const outputDOM = document.querySelector('.output');
const operationsDOM = document.querySelectorAll('.operation');
const ACDOM = Array.from(operationsDOM).find(item => {
    if (item.innerHTML === 'AC') {
        return true
    }
    else {
        return false
    }
})
ACDOM.addEventListener('click', () => {
    num1 = ''
    num2 = ''
    operation = ''
    flag = false
    outputDOM.innerHTML = '';
})
const numbersDOM = document.querySelectorAll('.number');
numbersDOM.forEach((item) => {
    item.addEventListener('click', () => {
        const buttonInnerHTML = item.innerHTML
        if ((num2 === '') && (operation === ''))
        {
            if (num1 === '0') {
                num1 = ''
            }
            num1 += buttonInnerHTML
            outputDOM.innerHTML = num1
        }
        else if ((num1 !== '') && (num2 !== '') && flag) {
            if (num2 === '0') {
                num2 = ''
            }
            num2 = buttonInnerHTML
            flag = false
            outputDOM.innerHTML = num2
        }
        else {
            if (num2 === '0') {
                num2 = ''
            }
            num2 += buttonInnerHTML
            outputDOM.innerHTML = num2
        }
    })
})
operationsDOM.forEach((item) => {
    if ((item.innerHTML !== 'AC') && (item.innerHTML !== '.'))
    {
        item.addEventListener('click', () => {
            const buttonInnerHTML = item.innerHTML
            operation = buttonInnerHTML
            outputDOM.innerHTML = operation
        })
    }
})
const calculateDOM = document.querySelector('.calculate')
calculateDOM.addEventListener('click', () => {
    let result
    if (num2 !== '') {
        if (num1 === '')
        {
            num1 = '0'
        }
        switch (operation) {
            case '+':
                result = (parseFloat(num1) + parseFloat(num2)).toFixed(7) * 1
                num1 = result.toString()
                break;
            case '-':
                result = (parseFloat(num1) - parseFloat(num2)).toFixed(7) * 1
                num1 = result.toString()
                break;
            case '*':
                result = (parseFloat(num1) * parseFloat(num2)).toFixed(7) * 1
                num1 = result.toString()
                break;
            case '/':
                if (num2 === '0') {
                    outputDOM.innerHTML = 'Ошибка.'
                    num1 = ''
                    num2 = ''
                    operation = ''
                    return
                }
                else {
                    result = (parseFloat(num1) / parseFloat(num2)).toFixed(7) * 1
                    num1 = result.toString()
                }
                break;
        }
    }
    flag = true
    outputDOM.innerHTML = num1
    num2 = ''
})
const pointDOM = Array.from(operationsDOM).find(item => {
    if (item.innerHTML === '.') {
        return true
    }
    else {
        return false
    }
})
pointDOM.addEventListener('click', () => {
    const buttonInnerHTML = pointDOM.innerHTML
    if ((num2 === '') && (operation === ''))
    {
        if (num1 === '') {
            num1 = '0'
        }
        if (num1.includes('.')) {
            return
        }
        num1 += buttonInnerHTML
        outputDOM.innerHTML = num1
    }
    else if ((num1 !== '') && (num2 !== '') && flag) {
        if (num2 === '') {
            num2 = '0'
        }
        if (num2.includes('.')) {
            return
        }
        num2 = buttonInnerHTML
        flag = false
        outputDOM.innerHTML = num2
    }
    else {
        if (num2 === '') {
            num2 = '0'
        }
        if (num2.includes('.')) {
            return
        }
        num2 += buttonInnerHTML
        outputDOM.innerHTML = num2
    }
})