function main () { 
    const chooseANumber = () => {
        const number = +prompt('Choose a number','');
        return number;
    }  
    const fibonacci = (fib) => {
        let a = b = 1;
        for (let i = 3; i <= fib; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
    const showResult = () => {
    alert(fibonacci(chooseANumber()));
    }
    showResult();
};
main();