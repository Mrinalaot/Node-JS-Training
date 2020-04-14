function registerNewUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var data = {
        "username": username,
        "password": password,
        "name": name,
        "email": email
    };
    let registerApiUrl = 'http://localhost:3000/register';
    fetch(registerApiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.message == "UserRegistered") {
                alert(`${username} your Profile is Created! Please Login...`);
                window.location.href = "login";
            } else
                window.location.href = "/";
        })
        .catch((error) => {
            console.log('Error:', error);
        });
}