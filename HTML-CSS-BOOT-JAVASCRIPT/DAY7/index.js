$(document).ready(function() 
{
   
    // $("p").click(function(){
    //     $(this).hide();
    // });

    // $("h1").mouseenter(function(){
    //     alert("H1 into alert");
    // })


    // $("input").focus(function(){
    //     $(this).css("background-color", "yellow");
    // });

    // $("input").focus(function(){
    //     $(this).css("background-color", "#ffffff");
    // });


    
    // function showDiv(item)
    // {
    //     if(item==1)
    //         $("#div1").text("Apple");
    //     else
    //         $("#div1").text("Car");

    // }

    // showDiv(1);



    // $("button").click(function(){
    //     var value=$("input").val();

    //     if(value==1)
    //         $("#div1").text("Apple");
    //     if(value==2)
    //         $("#div1").text("Car");

    // });

    // $("input").change(function(){
    //     // if($(this).checked)
        // {
        //     $("#div1").text($("input[type='checkbox']".val()));
        // }

        // if($('input[type=checkbox]').prop('checked')==true)
        // {
        //     $("#div1").text($("input[type='checkbox']").val());

        // }
        // if($('input[type=checkbox]').prop('checked')==false)
        // {.
        //     $("#div1").text("");

        // }

        // if(this.checked)
        // {
        //     $("#div1").append($(this).val()+"<br>");
        // }


        $('input[type="radio"]').change(function(){
           
            if($(this).val()=="fruits") 
           {
               let list = "<ul><li>Apple</li><li>Orange</li></ul>"
                $("#div1").html(list);
           }
           else if($(this).val()=="animals")
           {
               let list = "<ul><li>Tiger</li><li>lion</li></ul>"
               $("#div1").html(list);
           }
        });

    // });

});

