function walk(){
    console.log('walk');
}

const run = function(){
    console.log('run');
};

run();

const move = run;

move();