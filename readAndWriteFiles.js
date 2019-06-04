const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

require('./createOrDeleteDemoFiles');

const johnJacob = path.join(__dirname, 'john-jacob.txt');
const textFilesFolder = path.join(__dirname, 'textFiles');
const zipFilesFolder = path.join(__dirname, 'zipFiles');
const zip = zlib.createGzip();

fs.createReadStream(johnJacob)
	.pipe(zip)
	.pipe(fs.createWriteStream(path.join(zipFilesFolder, 'john-jacob.gz.Z')));

fs.createReadStream(johnJacob)
	.pipe(fs.createWriteStream(path.join(textFilesFolder, 'john-jacob-copy.txt')));