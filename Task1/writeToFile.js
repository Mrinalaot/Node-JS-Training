
// Result is stored in outputFile 
const fs = require('fs');
const outputFile = process.argv.slice(2)[1];

function writeToFile(data){
	fs.appendFileSync(outputFile, data);
}

module.exports = writeToFile;
