function saveData()
{
    let name, email, password, country;
    name = document.getElementById('username').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>
    {
        return v.email == email
    }))
    {
        alert('Dublicate');
    }
    else
    {
        user_records.push
        ({
            "name":name,
            "email":email,
            "password":password
        })
        localStorage.setItem("users", JSON.stringify(user_records));
    }
}