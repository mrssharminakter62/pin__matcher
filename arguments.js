// arguments is a array like Object------

function getfullName(firstName, lastName) {
    let fullName = '';
    for(let i = 0; i< arguments.length; i++){
        const namePart = arguments[i];
        fullName = fullName + ' ' + namePart;
    }
    return fullName;
}
const name = getfullName('Hanif', 'songket', 'subokta', 'jonodorodi');
console.log(name);