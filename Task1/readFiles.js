// Reads files recursively and create hash
const fs = require('fs');
const writeToFile = require('./writeToFile.js');
const fileToHash = require('./fileToHash');
const __path = require('path');

function readFiles(path){	
	var files = fs.readdirSync(path);
		for(file of files){
			let fileFullPath = __path.join(__dirname, path, file);
			if(fs.statSync(fileFullPath).isDirectory())
				readFiles(__path.join(path, file))
			else{
			let output = fileFullPath+"\t-[MD5]-> "+ fileToHash(fileFullPath, "md5") + " -[SHA1]-> "
																	+ fileToHash(fileFullPath, "sha1") +"\n";
			 writeToFile(output);
			}
		}
}

module.exports = readFiles;