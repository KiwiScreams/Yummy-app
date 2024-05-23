const switchTheme = () => {
    const rootElem = document.documentElement
    let dataTheme = rootElem.getAttribute("data-them"),
        newTheme;
    newTheme = (dataTheme === 'light') ? 'dark' : 'light';
    if (dataTheme === 'light') {
        newTheme = 'dark';
        document.getElementById("switch").innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        newTheme = 'light';
        document.getElementById("switch").innerHTML = '<i class="fa-solid fa-sun"></i>'
    }

    rootElem.setAttribute('data-them', newTheme)

    localStorage.setItem("Theme", newTheme);
}
document.querySelector("#switch").addEventListener("click", switchTheme);
function Light_And_Dark_Battle()
{
    const them = localStorage.getItem("Theme");
    const rootElem = document.documentElement;
    rootElem.setAttribute('data-them', them ? them : 'light');
}
Light_And_Dark_Battle();
