function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

// const Circle1 = new Function('radius',`
// this.radius = radius;
// this.draw = function(){
//     console.log('draw');
// }
// `);

// const circle1 = new Circle1(1);

