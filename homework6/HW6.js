let lenghtArray, arrayValues;

do{
    lenghtArray = +prompt('Please, provide amont of element in your array (for 5 since 20)','') 
} while (lenghtArray != lenghtArray || lenghtArray < 5 || lenghtArray > 20)


const fillingArray = function () {
    let array = [];
    for(let i = 0; i < lenghtArray; i++){
        arrayValues = +prompt('Provide your element', '' )
        array.push(arrayValues);   
    }
    return array

}();
const shellSort = function (arr) {
    var n = arr.length, i = Math.floor(n/2);
    while (i > 0)
    { for (var j = 0; j < n; j++)
        { var k = j, t = arr[j];
        while (k >= i && arr[k-i] > t)
        { arr[k] = arr[k-i]; k -= i; }
        arr[k] = t;
        }
    i = (i==2) ? 1 : Math.floor(i*5/11);
    }
    return arr;

}
function showResult(arg) {
    const a = shellSort(arg)
    alert(a)
}
showResult(fillingArray)