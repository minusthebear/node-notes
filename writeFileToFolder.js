const fs = require('fs');
const path = require('path');
const johnJacob = path.join(__dirname, 'john-jacob.txt');
const folderOne = path.join(__dirname, 'textFiles');
const folderTwo = path.join(__dirname, 'zipFiles');
const args = process.argv;

let file;

if (!fs.existsSync(johnJacob)) {
	createFile()
}

function createFile() {
	let f = fs.createWriteStream(johnJacob);
	f.write('John Jacob Jingleheimer Smith, that\'s my name, too! Whenever I go out, the people always shout, "There goes John Jacob Jingleheimer Smith!\n');
	f.end();
}



