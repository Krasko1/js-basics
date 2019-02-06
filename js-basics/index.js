function createAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    };
}

const another = createAddress('a','b',1);
// console.log(another);

function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const third = new Address('c','d',2);
console.log(third);