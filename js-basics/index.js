const address = {
    street:'Jugoslovenska',
    city:'Lalic',
    zipCode:25234
};

function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}

showAddress(address);