const arraySort = (array) => {
    array.sort((a, b) => (a > b) ? 1 : -1 )
    const message1 = `По возрастанию: ${array}`
    array.sort((a, b) => (a > b) ? -1 : 1 )
    const message2 = `По убыванию: ${array}`
    console.log(`${message1}
${message2}`)
alert(`${message1}
${message2}`)
}

const oddOrEvenNumbers = (array) => {
    const oddArr = [];
    const evenArr = [];
    array.map(i => (i % 2 == 0) ? oddArr.push(i) : evenArr.push(i))
    const message = `Четные числа: ${oddArr}
Не четные числа: ${evenArr}`
console.log(message)
alert(message)
} 

const functionThird = (array) => {
    const summ = array.reduce((a, b) => a + b)
    const avg = array.reduce((a, b) => {
        result= (a + b)/array.length;
        return result})
    const less = array.reduce((a, b) => {
        a > b
        return a})
    const bigger = array.reduce((a, b) => {
        a > b
        return b})

    message = `Сумма всех значений : ${summ}
Среднее арифметическое : ${avg}
Наименьшее число: ${less}
Наибольшее значение: ${bigger} `
console.log(message)
alert(message)
}


const getArray = () => {
    let arr = prompt('Введите свои данные', '').split(' ')
    arr = arr.map(item => +item)
    const arr2 = arr.filter(i => {
        if (parseInt(i) >= 0){
            return i
        }
        return arr2
    })

}
const chooseOperation = (array) => {
    const operation = +prompt(`Выберите операцию над данными: 
    1 - отсортировать по возрастанию/убыванию
    2 - вывести все четные/не четные числа,
    3 - вывести сумму всех чисел,среднее арифметическое число, наибольшее/наименьшее число`, '')
    switch (operation){
        case 1 : arraySort(array);
        break;
        case 2 : oddOrEvenNumbers(array);
        break;
        case 3 : functionThird(array);
        break;
    }
    isItRepeat()
}

const isItRepeat = () => {
    const repeat = confirm('Do you wanna choose some else operation?')
    if(repeat){
        chooseOperation(arr)
    }else{
        getArray()
    }

}
const showMessage = () => {
    
})


getArray()

chooseOperation(arr2)
