function generateRandomNumber() {
    return (Math.random() * 10000).toString().substring(0, 4);
}

function generateAuthToken(username, randomNumber) {
    return `${username}${randomNumber}`;
}

module.exports = {
    generateRandomNumber: generateRandomNumber,
    generateAuthToken: generateAuthToken
}