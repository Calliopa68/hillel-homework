( () => {
    let finallData;
    const getArray = () => {
        let data = prompt('Введите данные через запятую', '').split(',')
        data = data.map (item => +item)
        finallData = data.filter(i => {
            if (parseInt(i) >= 0){
                return i;
            }
        });
        return finallData;
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
        isItRepeat();
    }

    const arraySort = (array) => {
        const array1 = array.sort((a, b) => (a > b) ? 1 : -1 );
        const array2 = array.sort((a, b) => (a > b) ? -1 : 1 );
        showMessage(`По возрастанию: ${array1} 
        По убыванию: ${array2}`)
    }

    const oddOrEvenNumbers = (array) => {
        const oddArr = [];
        const evenArr = [];
        array.map(i => (i % 2 == 0) ? oddArr.push(i) : evenArr.push(i));
        showMessage(`Четные числа: ${oddArr}
        Не четные числа: ${evenArr}`);
    } 

    const functionThird = (array) => {
        const summ = array.reduce((a, b) => a + b)
        const avg = array.reduce((a, b) => {
            result= (a + b)/array.length;
            return result;
        })
        const less = array.reduce((a, b) => {
            a > b;
            return a;
        })
        const bigger = array.reduce((a, b) => {
            a > b;
            return b;
        })
    
        showMessage(`Сумма всех значений : ${summ}
        Среднее арифметическое : ${avg}
        Наименьшее число: ${less}
        Наибольшее значение: ${bigger} `);
    }

    const showMessage = (message) => {
        alert(message);
        console.log(message);
    }

    const isItRepeat = () => {
        const repeat = confirm('Хотите выбрать другое действие')
        if(repeat){
            chooseOperation(finallData)
        }else{
            chooseOperation(getArray())
        }
    
    }
chooseOperation(getArray())
})();
