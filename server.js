const http = require('http');

const redirectURL = "https://example.com"; // Change to your target URL

const server = http.createServer((req, res) => {
    res.writeHead(302, { 'Location': redirectURL });
    res.end();
});

server.listen(8000, () => {
    console.log("Redirect server running on http://localhost:8000");
});
