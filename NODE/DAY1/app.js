// console.log("Hello World");

// function sayName(name)
// {
//     // console.log("Hai " +name);
//     for(var i=0; i<10; i++)
//     {
//        console.log("Hai " +name);      
//     }
// }

// sayName("Akshay");

// function add(val1, val2)
// {
//     return(val1+val2);
// }

// sum=add(1,2);
// console.log(sum);

// var logger=require('./logger.js');      //logger will get the export from 'logger.js'..so thef ucntion is send to logger, so logger iteself becomes the function
// logger("Hello");


//Accesing multiple values exported

// var logger=require('./logger.js');  //when multiple values are accesed using 'require'.. logger will be oject..so to acces . should be used
// logger.display("Multiple Hello");
// console.log(logger.link);

// var dmd=require('./dateModule');
// console.log(dmd.myDateTime());

var os=require('os');
// console.log(os);
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.type());