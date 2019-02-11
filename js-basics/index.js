const person = {
    firstName: 'Vlada',
    lastName: 'Krasko',
    get fullname(){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullname(value){
        if(typeof value !== 'string')
            throw new Error('Value is not a string');
        
        const parts = value.split(' ');

        if(parts.length !== 2)
            throw new Error('Enter a first name and last name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
    person.fullname = '';
}
catch(e){
    alert(e);
}

console.log(person);