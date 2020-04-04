var http = require('http');

var server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h2 style="color:red">Hello World!...###</h2>');
});

server.listen(8080, ()=> console.log("Listing to port 8080"));

