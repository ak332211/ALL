//file system


const fs=require('fs');

//


// const files=fs.readdirSync('./');
// comsole.log(files);

// fs.readdir('./', function(err, files){
    
//     if(err) 
//         console.lof('Error', err);
//     else    
//         console.log('Result', files);
//     // console.log(files);

// });

//readin files in fs

//sync manner
// var data=fs.readFileSync("dummy.txt", 'utf8');
// console.log(data);


//async manner
// fs.readFile("dummy.txt", 'utf8', function(err, data){

//         if(err) 
//             throw err;  
//             // console.log(err);

//         console.log(data);
// })



//Write to file
//async write

// fs.writeFile('test.txt', 'Wassup ', function(err){
//     if(err)
//         console.log(err);
//     else
//         console.log("Write operation Successfully")
// })


//sync write

fs.writeFileSync('test2.txt', "Second with sync");


