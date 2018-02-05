const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});
app.get('/users', (req, res) => {
    res.status(200).send([{
        name:'Matheus',
        age: 20
    },{
        name:'Vergil',
        age:24
    }, {
        name:'Mike',
        age: 27
    }]);
});
//GET /users
//give users a name propriety and age

if (!module.parent) {
    app.listen(3000);
}
module.exports.app = app;