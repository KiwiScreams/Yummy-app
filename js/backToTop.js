const top_btn = document.getElementById("back-to-top")
window.onscroll = function () 
{
    if(document.documentElement.scrollTop > 700 || document.body.scrollTop > 700)
    {
        top_btn.style.visibility = "visible";
    }
    else
    {
        top_btn.style.visibility = "hidden";
    }
}
top_btn.onclick = function ()
{
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
}