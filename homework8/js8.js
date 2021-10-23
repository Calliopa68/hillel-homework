function main () { 
    const chooseANumber = () => {
        const number = +prompt('Choose a number','');
        return number;
    }  
    const fibonacci = (fib) => {
        if(fib <= 1){
            return[ 0, 1 ]
        }else{
            const [prev, next] = fibonacci( fib - 1 )
            return [next, prev + next]
        }
    }
    const showResult = () => {
    alert(fibonacci(chooseANumber()));
    }
    showResult();
};
main();