function sum(){
    let total = 0;
    for(let value of arguments)
        total += value;
    return total;
}

// function sum(a, b){
     // return a + b;
// }

// console.log(sum(1, 2));
// console.log(sum(1));
// console.log(sum());
console.log(sum(1, 2, 3, 4, 5));

