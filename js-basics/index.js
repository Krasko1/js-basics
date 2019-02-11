const person = {
    firstName: 'Vlada',
    lastName: 'Krasko',
    get fullname(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullname(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullname = 'Iboja Tot-Djerdj';

console.log(person);