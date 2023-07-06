const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


var people= {people:[{ name: 'jyoti', email: 'jyoti@gmail.com'  }]}
// people
app.get('/people', function(req, res) {
    //res.send("Welcome   to the  Google");
res.json(people);
res.end();
});

app.post("/people", function (req, res) {
    if(req.body && req.body.name)
    {
        people.people.push({name: req.body.name})
    }
    console.log(req.body.name);
    res.json(people);
    res.end();
    
});

app.listen(3000);
