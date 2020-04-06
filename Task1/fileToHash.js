// You can pass your algorithm here like md5,sha1
const fs = require('fs');
const crypto = require('crypto');

function fileToHash(file,algo)
{
	let file_buffer = fs.readFileSync(file);
	let sum = crypto.createHash(algo);
	sum.update(file_buffer);
	return sum.digest('hex');
}

module.exports = fileToHash;