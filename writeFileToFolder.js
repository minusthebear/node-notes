const fs = require('fs');
const path = require('path');
const johnJacob = path.join(__dirname, 'john-jacob.txt');
const folderOne = path.join(__dirname, 'textFiles');
const folderTwo = path.join(__dirname, 'zipFiles');
const args = process.argv;

if (!fs.existsSync(johnJacob)) {
	createFile()
}

function createFile() {
	let f = fs.createWriteStream(johnJacob);
	f.write('John Jacob Jingleheimer Smith, that\'s my name, too! Whenever I go out, the people always shout, "There goes John Jacob Jingleheimer Smith!\n');
	f.end();
}

if (!fs.existsSync(folderOne)) {
	fs.mkdirSync(folderOne);
}

if (!fs.existsSync(folderTwo)) {
	fs.mkdirSync(folderTwo);
}

function deleteAllFoldersAndFilesCreatedFromThisFile(dir) {
	if (fs.existsSync(dir)) {
		fs.readdirSync(dir).forEach((file, idx) => {
			let curPath = path.join(dir, file);
			if (fs.lstatSync(curPath).isDirectory()) {
				deleteAllFoldersAndFilesCreatedFromThisFile(curPath);
			} else {
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(dir);
	}
}

if (args[2] === 'delete-all') {
	fs.unlinkSync(johnJacob);
	deleteAllFoldersAndFilesCreatedFromThisFile(folderOne);
	deleteAllFoldersAndFilesCreatedFromThisFile(folderTwo);
}

