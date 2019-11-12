$(document).ready(function(){

    $("input").change(function(){


        // var name="";
        // var last_date="";

        


        for(let i=0; i<this.files.length; i++)
        {
            let file = this.files[i];
            var reader=new FileReader();


            reader.readAsText(file);

            reader.onload = function(e){           //onload()  for succesful loading/reading of the textfile
                console.log(e.target.result);
            }

            reader.error=function(e){            //error() for showing any error if file loading encountered any error
                console.log(e.target.error);
            }

            





            // console.log(this.files[i]);
            // name += this.files[i].name+"<br>";
            // last_date += this.files[i].lastModifiedDate+"<br>";
         
        }
        // $("p").html(name + "<br>" + last_date);
        // let file =         // $("p").html(name + "<br>" + last_date);this.files[0];
        // console.log        // $("p").html(name + "<br>" + last_date);(file);
                // $("p").html(name + "<br>" + last_date);
        // alert(file.        // $("p").html(name + "<br>" + last_date);name);
        // $("p").html(name + "<br>" + last_date);
        // $("p").text        // $("p").html(name + "<br>" + last_date);(file.lastModifiedDate);



    })

    // function showfile()
    // {

    // }

});

