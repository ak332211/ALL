function validatefrom(form)
{
    var eml=form.email.value;
    var psd=form.password.value;
    var cpsd=from.cpassword.value;
    var email_re=/\S+@\S+\.\S+/;

    if(email_re.test(eml)==false)
    {
        alert("Enter proper mail id");
        return false;
    }
    else if(psd!=cpsd)
    {
        alert("Not equal");
        return false;
    }

}

function validatelogin()
{
    alert("Logged In");
    return false;
}