const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 6028;

const { Server } = require("socket.io");
const io = new Server(server, { pingInterval: 2000, pingTimeout: 1000 });

app.get("/", (req, res) => {
	res.sendFile("/index.html");
});

// Start server
server.listen(port, () => {
	console.log("Server started");
});
