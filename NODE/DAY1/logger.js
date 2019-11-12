// var url='http://ictkerala.org/';

// function print(message){
//     console.log(message);
// }

// module.exports=print;   // used to export the specific item specified..here print will be exported , which can be usd using require keyword

//exporting multiple items

var url='http://ictkerala.org/';

function print(message){
    console.log(message);
}

module.exports.display=print;   //here print is being exported using the name diplay.."so to access print display name will be used in the other file
module.exports.link=url;


