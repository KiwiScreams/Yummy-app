function ShowHideEye()
{
    let eye_open = document.getElementById("eye").innerHTML;
    console.log(eye_open);
    if(eye_open ==   '<i class="fa-regular fa-eye" aria-hidden="true"></i>')
    {
       document.getElementById("eye").innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
       document.getElementById("password").type = 'text';
    }
    else
    {
        document.getElementById("eye").innerHTML = '<i class="fa-regular fa-eye"></i>';
        document.getElementById("password").type = 'password';
    }
}