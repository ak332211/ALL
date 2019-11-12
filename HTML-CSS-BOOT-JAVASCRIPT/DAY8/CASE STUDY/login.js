$(document).ready(function(){

    
    $("button").click(function(){
        var name=$("#uname").val();
        var pass=$("#passd").val();

        validateLogin(name, pass, function(f){

            //console.log(name, pass);
            if(f==1)
            {

                window.location.href = 'main.html';   //if password username correct open 'main.html'
            }

            else
            {
                alert("Login Failed")  
            }
        })

    })

    function validateLogin(u, p, callback)
    {
        
        var flag=0;

        if(u=="admin" && p=="1234")
            flag=1;
        else    
            flag=0;

        callback(flag);
    }

});