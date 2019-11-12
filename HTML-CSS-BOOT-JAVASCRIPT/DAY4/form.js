function validateform(form)
{
    // var uname=document.getElementById("username").value;

    // alert(uname);

    var uname=form.username.value;  //here the username is not id , it is name attribute
    var emm=form.eml.value;
    var ppnum=form.pnum.value;
    var email_re=/\S+@\S+\.\S+/;
    var phone_re=/(6|7|8|9)\d{9}$/;
  

    if(uname.length<6)
    {
        alert("Enter a valid username");
        return false;

    }

    else if(email_re.test(emm)==false)
    {
        alert("Enter proper mail id");
        return false;
    }

    else if(phone_re.test(ppnum)==false)
    {
        alert("Enter proper number");
        return false;
    }

   
        
}