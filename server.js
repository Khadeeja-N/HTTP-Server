const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
        res.setHeader("Content-Type", "text/html");
        switch(req.url) {
                case "/about":
                        fs.readFile(__dirname + "/about.html")
                                .then(about => {
                                        //res.setHeader("Content-Type", "text/html");
                                        res.writeHead(200);
                                        res.end(about);
                })
                                .catch(err => {
                                        res.writeHead(500);
                                        res.end(err);
                                        return;
                        });

                default:
                        fs.readFile(__dirname + "/main.html")
                                .then(main => {
                                        //res.setHeader("Content-Type", "text/html");
                                        res.writeHead(200);
                                        res.end(main);
                                })
                                .catch(err => {
                                        res.writeHead(500);
                                        res.end(err);
                                        return;
                                });
}

};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
});
