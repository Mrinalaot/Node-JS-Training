window.onload = function() {
    let username = this.getCookie("username");
    if (username) {
        document.getElementById('email').innerHTML = this.getCookie("email");
        document.getElementById('login-btn').style.display = "none";
    } else {
        document.getElementById('signout').style.display = "none";
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function handleLogin() {
    window.location.href = "/login"
}

function deleteCookie(cookie) {
    document.cookie = `${cookie}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

function handleSignout() {
    deleteCookie("username");
    deleteCookie("email");
    window.location.href = "/";
}

function handleProfile() {
    let isLoggedin = this.getCookie("username");
    if (isLoggedin) {
        window.location.href = "profile.html";
    } else {
        window.location.href = "/login";
    }
}