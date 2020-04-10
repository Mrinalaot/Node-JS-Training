function getUserDetails() {
    const url = `http://localhost:3000/api/userprofile`;
    const res = document.getElementById('result');
    fetch(url).then((data) => {
        data.json()
            .then(jsonData => {
                res.innerText = ` Response from Server
                                  FullName : ${jsonData.fullname} 
                                  Email : ${jsonData.email} `;
            });
    });
}