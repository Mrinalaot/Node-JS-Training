// https://web.microsoftstream.com/video/ca70656c-be83-46bd-8e4d-9cb99d70d247
// https://web.microsoftstream.com/video/7a12051d-3eb0-43b6-9555-1c3e73d70c12

var http = require('http');

var server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h2 style="color:red">Hello World!...###</h2>');
});

server.listen(8080, ()=> console.log("Listing to port 8080"));

