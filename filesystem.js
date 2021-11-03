const fs = require('fs');
fs.writeFile('file.txt', "sample text", (err)=> err? console.log(err): console.log('file successfully created'))