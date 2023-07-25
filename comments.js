// create a web server
// 1. require express
const express = require('express');
// 2. create an express app
const app = express();
// 3. listen to incoming request
app.listen(3000, () => console.log('Listening on port 3000...'));
// 4. create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});
// 5. create a route
app.get('/api/comments', (req, res) => {
    res.send([1, 2, 3]);
});
// 6. create a route
app.get('/api/comments/:id', (req, res) => {
    res.send(req.params.id);
});
// 7. create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.params);
});
// 8. create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.query);
});
// 9. create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.query);
});
// 10. create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.query);
});
// 11. create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.query);
});
// 12. create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.query);
});
// 13. create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.query);
});
// 14. create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.query);
});
// 15. create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.query);
});
// 16. create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.query);
});
// 17. create a route
app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.query);
});