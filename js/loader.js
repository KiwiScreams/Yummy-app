let preloader = document.getElementById('preloader');
window.addEventListener("load", function()
{
    setTimeout(() => 
        {
        preloader.style.display = 'none';
    }, 2000);
    
})