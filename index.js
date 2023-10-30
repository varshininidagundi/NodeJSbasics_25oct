fs = require ('fs');
let data1 = fs.readFileSync('utility.json')
console.log(JSON.parse(data1))
let data3=JSON.parse(data1)
console.log(data3.array1)
let request={ 
    name:"mini",
    address:"door no 98",
    city:"bgk"
}
data3.array1.push(request);
console.log(data3.array1)
const filename= 'utility.json';
fs.writeFileSync(filename,JSON.stringify(data3))

//const fs = require('fs');
//const filename = 'utility.json';

// Use fs.writeFileSync to clear the content of the file
const output=fs.readFileSync('utility.json');
console.log(JSON.parse(output));

/*
let data2 = fs.readFileSync('utility.json')
console.log(JSON.parse(data2))
var fs = require('fs');

let person2={ 
    name:"vaishu",
    address:"rr nagar",
    city:"kengeri"
}
fs.appendFileSync('utility.json',JSON.stringify(person2))
let person2_data = fs.readFileSync('utility.json')
console.log(JSON.parse(person2_data))*/
