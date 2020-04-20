function authUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var data = {
        "username": username,
        "password": password
    };
    let authApiUrl = 'http://localhost:3000/api/auth';
    fetch(authApiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.message == "CookieExist") {
                window.location.href = "profile.html";
            } else if (data.message == "InvlidUserCredential") {
                alert("Username or Password invalid");
                window.location.href = "\login";
            } else {
                window.location.href = "profile.html";
            }
        })
        .catch((error) => {
            console.log('Error:', error);
        });
}