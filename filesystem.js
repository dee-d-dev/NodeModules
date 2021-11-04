const fs = require("fs");
// fs.writeFile("file.txt", "sample text", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file created successfully");
//   }
// });

// fs.readFile("file.txt", "utf8", (err, file) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(file);
//   }
// });

// fs.rename("file.txt", "file2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully renamed");
//   }
// });

// fs.appendFile("file2.txt", " This is the new content", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully modified file");
//   }
// });

// fs.unlink('file2.txt', (err)=>{
//   if(err){
//     console.log(err)
//   } else{
//     console.log(`Deleted ssuccessfully`)
//   }
// })

// fs.mkdir("tutorial", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile("./tutorial/example.txt", "automation", (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("file created successfully");
//       }
//     });
//   }
// });

// fs.unlink("./tutorial/example.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.rmdir("tutorial", (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Folder removed successfully");
//       }
//     });
//   }
// });

// fs.readdir("./tutorial", (err, files) => {
//   if (err) {
//     console.log(err);
//   } else {
//     for (let file of files) {
//       fs.unlink(`./tutorial/${file}`, (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(`${file} successfully deleted`);
//         }
//       });
//     }
//   }
// });

const readStream = fs.createReadStream("./example.txt", "utf8");
const writeStream = fs.createWriteStream("example2.txt");
readStream.on("data", (chunk) => {
  writeStream.write(chunk);
});

//readtsream uses a small buffer and this makes better than a readFile
