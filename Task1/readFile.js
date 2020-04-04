// READ FILE RECURSIELY & Create Hash. Also store result to Output file

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const outputFile = "result.txt";
const myArgs = process.argv.slice(2);
const myPath = myArgs[0];

fs.writeFileSync(outputFile, "--- Generating Fresh Output file ----\n");

// You can pass your algorithm here like md5,sha1
function fileToHash(file,algo)
{
	let file_buffer = fs.readFileSync(file);
	let sum = crypto.createHash(algo);
	sum.update(file_buffer);
	return sum.digest('hex');
}

// Result is stored in outputFile 
function writeToFile(data){
	fs.appendFileSync(outputFile, data);
}

// Reads files recursively and create hash
function readFiles(path){	
	var files = fs.readdirSync(path);
		for(file of files){
			let fileFullPath = __dirname+"\\"+path+"\\"+file;
			if(fs.statSync(fileFullPath).isDirectory())
				readFiles(path+"\\"+file)
			else{
			let output = fileFullPath+"\t-[MD5]-> "+ fileToHash(fileFullPath, "md5") + " -[SHA1]-> "
																	+ fileToHash(fileFullPath, "sha1") +"\n";
			 writeToFile(output);
			}
		}
}

try{
	if(myArgs.length===0)
		console.log("[ERROR] [info] - Please provide a parameter");
	else if(fs.statSync(myPath).isDirectory()===false)
		console.log("[ERROR] [info] - Please provide a Path as a param NOT File")
	else{
		console.log("Reading your files...");
		readFiles(myPath);
		console.log("Your Result is ready in Output File!!");
	 }
}
catch(err) {
   console.log("[ERROR] [info] - FILE or Directory you provided NOT Found");
}