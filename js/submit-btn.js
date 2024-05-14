let NI__panel = document.getElementById('NI-panel');
let submit__btn = document.getElementById('submit-btn');
let input_1 = document.getElementById('username');
let input_2 = document.getElementById('password');
var mess_audio = document.getElementById("message-Audio");
let value = "";
let value_2 = "";
submit__btn.disabled = true;

input_1.addEventListener("keyup", (e) => 
{
    value = e.currentTarget.value;
    
});
input_2.addEventListener("keyup", (i) => 
{
    value_2 = i.currentTarget.value;
    
});
function Check()
{
    if(value != "" && value_2 != "")
    {
        submit__btn.disabled = false;
        console.log("well");
    }
    else
    {
        submit__btn.disabled = true;
    }
}
input_1.addEventListener("keyup", Check);
input_2.addEventListener("keyup", Check);
submit__btn.addEventListener('click', SubmitBtn);

function SubmitBtn() 
{
    setTimeout(() => 
    {
        NI__panel.style.display = "block";
        playAudio();
    }, 0);
    setTimeout(() => 
    {
        NI__panel.style.display = "none";
        window.location.href="login.html";
    }, 3000);
}
function playAudio() 
{ 
    mess_audio.play(); 
}  