
const fs = require('fs');
var readdir = fs.readdirSync('./');
console.log(readdir);

console.log();

fs.readdir('abc', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});