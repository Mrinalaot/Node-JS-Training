// READ FILE RECURSIELY & Create Hash. Also store result to Output file
// node main.js dir result.txt

const readFiles = require('./readFiles.js');
const fs = require('fs');
const args = process.argv.slice(2);


try{

	if(args.length!==2)
		console.log("[ERROR] [info] - Please provide two parameters 1) Directory 2) OutputFileName ");
	else if(fs.statSync(args[0]).isDirectory()===false)
		console.log("[ERROR] [info] - Please provide a Path as a param NOT File")
	else{
		console.log("Reading your files...");
		let outputFile = args[1];
		fs.writeFileSync(outputFile, "--- Generating Fresh Output file ----\n");
		let directoryPath = args[0];
		readFiles(directoryPath);
		console.log("Your Result is ready in Output File!!");
	 }
}
catch(err) {
   console.log("[ERROR] [info] - FILE or Directory you provided NOT Found");
}