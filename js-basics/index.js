const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
// myPermission = myPermission | readPermission | writePermission;
myPermission = myPermission | writePermission;

let message = myPermission & readPermission ? 'yes' : 'no';

console.log(message);