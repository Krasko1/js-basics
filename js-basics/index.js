const numbers = [1, 5, 2, 3, 4];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
    if(array.length === 0) return undefined;

    // let max = array[0];
    // for(let i = 1; i < array.length; i++)
    //     if(array[i] > max)
    //         max = array[i];
    // return max;

    array.reduce((a, b) => (a > b) ? a : b);
}