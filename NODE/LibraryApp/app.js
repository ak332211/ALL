const express = require('express');
const chalk = require('chalk');
const path = require('path');


const app = new express();
const booksRouter = express.Router();

app.use(express.static(path.join(__dirname, "/public")));
app.use('/books', booksRouter);


app.set('views', './src/views');            //we are setting the 'views' from the specified path on the right
app.set('view engine', 'ejs');              //we are setting the 'view engine' as 'ejs'




var nav =   [
                {   
                    link:"/" , 
                    title:"HOME"
                },

                { 
                    link:"/contactus" , 
                    title:"CONTACT US"

                },

                {   
                    link:"/signup" , 
                    title:"SIGN UP" 
                },

                { 
                    link:"/login" , 
                    title:"LOGIN"
                }, 
                
                { 
                    link:"/books" , 
                    title:"BOOKS"
                },

                { 
                    link:"/authors" , 
                    title:"AUTHORS"
                }
            ];


var books = [

    {
        title:"War and peace",
        genre:"History",
        author:"Lev Chop",
        image:"book1.jpg" 
    },

    {
        title:"Alchemist",
        genre:"Fiction",
        author:"Paulo",
        image:"images.jpg" 
    },
    {
        title:"Hello",
        genre:"History",
        author:"Unni",
        image:"book1.jpg" 
    },
    {
        title:"World",
        genre:"Kids",
        author:"Sasi",
        image:"images.jpg" 
    }

]




booksRouter.route('/')
    .get(function(req, res)
    {
            res.render('books',
            {
                nav,
                title:"Books",
                books
            });

    })



app.get('/', function(req, res){            //either app.all() or app.get()


    // res.render('index',  { list:['book1','book2','book3'] , title:"Library" });                   //insted of 'sendFile()' , while using ejs, we need to use 'render()'          
    
    // res.render('index',
    //                     {
    //                         nav : [ { link:"/" , title:"HOME" },  
    //                                 { link:"/contactus" , title:"CONTACT US" }, 
    //                                 { link:"/signup" , title:"SIGN UP" }, 
    //                                 { link:"/login" , title:"LOGIN" }, 
    //                                 { link:"/books" , title:"BOOKS" },
    //                                 { link:"/authors" , title:"AUTHORS" },
    //                               ], title: "Library"
    //                     }


    // );


    res.render('index',
    {
        nav ,
        title:"Library",
    });

});

// app.all('/', function(req, res){
//     // res.send("First express app");

//     // res.sendFile(__dirname + "/src/views/index.html");
//     res.sendFile(path.join(__dirname, "/src/views/index.html"));        //same as above, used  path.join() instead of + concatenation operator

// });

app.listen(3000, function(){
    // console.log("listening to port 8000")
    console.log("Listening to port " + chalk.yellow('3000'));

});