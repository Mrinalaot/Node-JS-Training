window.onload = function() {
    let username = this.getCookie("username");
    if (username) {
        document.getElementById('email').innerHTML = this.getCookie("email");
        this.fetchAllPosts();
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


function fetchAllPosts() {
    let fetchPostsApiUrl = `http://localhost:3000/api/posts`;
    var mainContainer = document.getElementById("result");
    fetch(fetchPostsApiUrl).then((data) => {
        data.json()
            .then(posts => {
                posts.forEach(post => {
                    var div = document.createElement("div");
                    div.innerHTML = ` 

                    <div class="card">
                        <div class="card-header">
                            ${post.username}
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>${post.content}</p>
                                <footer class="blockquote-footer"> 
                                by ${post.username}
                                <cite title="Source Title">
                                 on ${post.last_updated.substring(0,10)}
                                 </cite></footer>
                            </blockquote>
                        </div>
                    </div>
                                        `;
                    mainContainer.appendChild(div);
                });
            });
    });

}

function createNewPost() {
    var username = this.getCookie("username");
    var postContent = document.getElementById('post').value;
    var data = {
        "username": username,
        "content": postContent
    };
    let createNewPostApiUrl = 'http://localhost:3000/api/posts/new';
    fetch(createNewPostApiUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.message == "PostCreated")
                window.location.href = "profile.html"
            else
                window.location.href = "/";
        })
        .catch((error) => {
            console.log('Error:', error);
        });
}


function deleteCookie(cookie) {
    document.cookie = `${cookie}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

function handleSignout() {
    deleteCookie("username");
    deleteCookie("email");
    window.location.href = "/";
}