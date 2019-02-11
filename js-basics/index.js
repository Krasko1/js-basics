// function sum(...args){
//     return args.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4, 5));

function sum(discount, ...prices){
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));

// NO:
// function sum(discount, ...prices, value){
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }

