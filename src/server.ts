import app from "./app";

const port = 3000;

// Start server on cloud port or local port 3000
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});