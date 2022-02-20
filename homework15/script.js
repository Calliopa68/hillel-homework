class Burger{
    constructor(size, toppings = []){
        this.size = size;
        this.toppings = [...toppings];
    }
}

Burger.SIZE = {
    small:{
        price:50,
        ccal:20
    },
    medium: {
        price:75,
        ccal:30
    },
    large: {
        price:100,
        ccal:40
    }
}
Burger.TOPPINGS = {
    cheese: {
        price:10,
        ccal:20
    },
    lattuce: {
        price:15,
        ccal:10
    },
    frenchFries:{
        price:15,
        ccal:10
    },
    spices: {
        price:15,
        ccal:0
    },
    mayo: {
        price:20,
        ccal:5
    }
}

Burger.prototype.addTopping = function(...toppings){
    this.toppings.push(...toppings)
};
Burger.prototype.getPrice = function(){
    return this.size.price + this.toppings.reduce((acc, e)=> acc + e.price, 0 )
}

Burger.prototype.getCcal = function(){
    return this.size.ccal + this.toppings.reduce((acc, e)=> acc + e.ccal, 0 )
}

const extraBigBurger = new Burger(Burger.SIZE.large);
extraBigBurger.addTopping(Burger.TOPPINGS.cheese)
extraBigBurger.addTopping(Burger.TOPPINGS.lattuce)
extraBigBurger.addTopping(Burger.TOPPINGS.spices)
extraBigBurger.addTopping(Burger.TOPPINGS.mayo)

console.log(extraBigBurger.getPrice(),extraBigBurger.getCcal());