function main () { 
    const chooseANumber = () => {
        const number = +prompt('Choose a number','');
        return number;
    }  
    const fibonnaci = (fib) => {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= fib; i++) {
        let c = a + b;
        a = b;
        b = c;
        }
        return b;
    }
    const showResult = () => {
    alert(fibonnaci(chooseANumber()));
    }
    showResult();
};
main();