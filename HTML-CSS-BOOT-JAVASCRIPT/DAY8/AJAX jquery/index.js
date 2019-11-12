$(document).ready(function(){

    $.ajax({
        method:"GET",
        url:"http://www.randomtext.me/api/lorem/ul-5/5-15",
        success:function(result, status, xhr){
            // console.log(result);
            console.log(status);
            console.log(xhr);
            $("#div1").html(result.text_out);

        }
    })


});