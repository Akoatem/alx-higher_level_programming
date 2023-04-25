#!/usr/bin/node
/** https://www.youtube.com/watch?v=zMX3gqs3Y7I**/

const fs = require('fs');
//const filename = process.argv[2];
//using argv[] shows that it will pass whatever parameter of filename

fs.readFile('text.txt', 'utf8', (err, data) =>{
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});
