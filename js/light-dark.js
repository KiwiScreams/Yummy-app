function Switch_Function()
{
    let switch_object = document.getElementById("switch").innerHTML;
    console.log(switch_object);
    if(switch_object == '<i class="fa-solid fa-sun" aria-hidden="true"></i>')
    {
       document.getElementById("switch").innerHTML = '<i class="fa-solid fa-moon"></i>'
       document.documentElement.style.setProperty('--blue-clr', '#0a184a');
       document.documentElement.style.setProperty('--white-clr', '#000');
       document.documentElement.style.setProperty('--black-clr', '#fff');
    }
    else
    {
        document.getElementById("switch").innerHTML = '<i class="fa-solid fa-sun"></i>'
        document.documentElement.style.setProperty('--blue-clr', '#1b3baf');
        document.documentElement.style.setProperty('--white-clr', '#efefef');
        document.documentElement.style.setProperty('--black-clr', '#000');
    }
}