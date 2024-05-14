document.querySelector("#image-upload").addEventListener("change", function()
{
    const reader = new FileReader();
    reader.addEventListener("load", ()=>
    {
        console.log(reader.result);
        localStorage.setItem("recent-image", reader.result);
    })
    reader.readAsDataURL(this.files[0]);
});
document.addEventListener("DOMContentLoaded", ()=>
{
    const recentImageURL = localStorage.getItem("recent-image");
    if(recentImageURL)
        {
            document.querySelector("#avatar").setAttribute("src", recentImageURL);
        }
});