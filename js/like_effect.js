let hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(myFunction);
function myFunction(item)
{
console.log(item.classList);
item.addEventListener('click', function()
{
    for (let index = 0; index < item.classList.length; index++)
        {
        console.log(item.classList[index]);
        if (item.classList[index] == "heart-red") {
            item.classList.remove("heart-red");
            return;
        }
    }
   item.classList.add("heart-red"); 
})
}