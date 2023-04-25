#!/usr/bin/node
/** https://www.youtube.com/watch?v=zMX3gqs3Y7I**/

const fs = require('fs');
//const filename = process.argv[2];
//using argv[] shows that it will pass whatever parameter of filenam
//const filename = process.argv[2];
//const content = process.argv[3];
const content = "some is present here!";

fs.writeFile('text.txt', content, err => {
	if (err){
		console.log(err);
		return;
	}
	console.log(content);
});
