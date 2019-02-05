const circle = {
    radius: 1
};

// circle.constructor
// new Number()
// circle = {};

circle.color = 'yellow';
circle.draw = function(){}

delete circle.color;
delete circle.draw;

console.log(circle);