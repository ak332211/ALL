// function multiply(num1, num2)
// {
//     return num1*num2;
// }

// let result=multiply(2, 3);
// console.log(result);


//EICMASCRIPT 5
//below one

// let multiply=function(num1, num2)
// {
//     return num1*num2;
// }

// let result=multiply(2, 3);
// console.log(result);

//EICMASCRIT 6 (ARROW FUNCTION)
//below one

// let multiply=(num1, num2)=>
// {
//     return num1*num2;
// }

// let result=multiply(2, 3);
// console.log(result);

// let re=(num)=>
// {
//     return num*num;
// }
// console.log(square(5));



//CAll BAck

// let getDetails=function(id, callback)
// {
//     console.log("Inside the function");
//     console.log("id: "+id);
//     callback();
// }
// getDetails(1, function(){
//     console.log("Finished");
// });


// let getDetails=(id, callback)=>
// {
//     console.log("Inside the fucntion");
//     console.log("id: "+id);
//     callback({id:id, name:'Meera'});
// }
// getDetails(1, (person)=>{
//     console.log(person);
//     console.log("finished"); 
// });



//Async

// console.log("Before");
// setTimeout( ()=>{console.log("Inside");}, 2000);
// console.log("After");




//Async undefind
// function getUser(id)
// {
//     setTimeout(()=>{ return({id:id, Name:'Meera'});
//                     }, 2000);
// }

// console.log("Before");
// const user=getUser(1);
// console.log(user);
// console.log("After");

// Async undefined solution with callback

// function getUser(id, callback)
// {
//     setTimeout(()=>{callback({id:id, Name:"Meera"});}, 2000);
// }
// console.log("Before");
// getUser(1, function(user){console.log(user); });
// console.log("After");


//Getter and Setter Object methods

// var person=new Object();

// person.setter=function(nm, ag)
// {
//     this.name=nm;
//     this.age=ag;
// }


// person.getter=function()
// {
//     console.log("Name is: "+this.name);
//     console.log("Age is : "+this.age);
// }

// person.setter('AKSHAY', 20);
// person.getter();

//using constructor

// function person(first_name, last_name)



//Object.create
// var coder={
//     isStudying : false,
//     printIntroduction : function()
//     {
//         console.log(`My name is: ${this.name}. Am I studying?: ${this.isStudying}. `);
//     }
// }

// var m1=Object.create(coder);
// m1.name='Mukul';

// m1.isStudying=true;
// m1.printIntroduction();

// var m2=Object.create(coder);
// m2.name="Akshay";

// m2.isStudying=false;
// m2.printIntroduction();

//Class

// class Vehicle {
//     constructor(name, maker, engine)
//     {
//         this.name=name;
//         this.maker=maker;
//         this.engine=engine;
//     }
//     getDetails()
//     {
//         return (`The name of bike is ${this.name}`);
//     }
// }
// //Making objcts with help constructor
// let bike1=new Vehicle('Hayabusa', 'Suzuki', '1300cc');
// let bike2=new Vehicle('NInja', 'Kawasaki', '1000cc');

// console.log(bike1.name);
// console.log(bike2.maker);
// console.log(bike1.getDetails());


//Inheritance Example
// class Person{
//     constructor(name){
//         this.name=name;
//     }
// }

// class Student extends Person
// {
//     constructor(name, id)
//     {
//         super(name);    //for accesinga above parent class constructor
//         this.id=id;
//     }
//     tostring(){
//         return(`Name of person: ${this.name}, Student ID: ${this.id}`);
//     }
// }
// let stud = new Student('Mukil', 22);
// console.log(stud.tostring());

//PROMISE EXAMPLE.....

var promise1 =  new Promise(function(resolve, reject) {
    const x = 10;
    const y = 10;
    if(x===y){


        resolve();
    }
    else {
        reject();
    }
});

// promise1.
//     then(function() {
//         console.log("Equal");

//     },
//     function() {
//         console.log("Not Equal");
//     });

// promise1.
//     then(function() {
//         console.log("Equal");

//     }).
//     catch(function() {
//         console.log("Not Equal");
//     });


//Promise with async/awit

// async function f() {
//     let promises = new Promise((resolve, reject) => {
//         var x=4;
//         var y=3;
//         setTimeout(()=> {
//             if(x==y){   resolve("done");    }
//             else {  reject("Rejected")  }
//         }, 1000)
//         });
//         await promises.
//         then(function(msg)
//         { 
//               console.log(msg);   
//         }).
//         catch(function(err)  
//         {
//              console.log(err); 
//         }); 
// }

// f();


//7-11-2019

// console.log("Before");


// var promise1 =  new Promise(function(resolve, reject) {

//     setTimeout(() => {
//         resolve({id:1, name:"Meera"});
//     }, 1000);

// });

// promise1.then(function(user) {
//     console.log(user);
//     return "To second then"
// }).
// then(function(msg){
//     console.log(msg);

//     //Promise inside then with single return
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve("to third then");
//         }, 1000);   
//     });

//     //Promise with dual return
    

// }).
// then(function(msg1){
//     console.log(msg1);
// }).

// catch(function(err){
//     console.log(err);
// })


// console.log("After");


// //Promise with function

// function myf(id){                                           //myf(usr)          //using object style passing
//     return new Promise(function(resolve, reject){           
//         setTimeout(function(){
//             resolve({id:id, name:"Akshay"})                 //resolve({id:usr.id, name:usr.name})   //object style passing
//         }, 1000);
//     });
// }

// myf(4).then(function(user){                                 //myf({id:4, name:"Akshay"})        //Oject style passing
//     console.log(user);
// })


//Async/await promise function

async function myf(usr){                                          
    return await new Promise(function(resolve, reject){           
        setTimeout(function(){
            resolve({id:usr.id, name:usr.name})                 
        }, 1000);
    });
}

myf({id:4, name:"Akshay"}).then(function(user){                                 
    console.log(user);
})
