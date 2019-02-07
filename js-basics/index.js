let numbers = [1,2,3,4];

numbers = [];
numbers.length = 0;
numbers.slice(0,numbers.length);

while(numbers.length > 0)
    numbers.pop();
