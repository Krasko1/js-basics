const numbers = [1, 1, 2, 3, 4];

const count = countOccurences(numbers, 1);

console.log(count);

function countOccurences(array, searchElement) {
    // let count = 0;
    // for(let value of array)
    //     if(value === searchElement)
    //         count++;
    // return count;

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}