const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PROT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello',(req,res) => {
    res.send({message: '안늉'});
});

app.listen(port, () => console.log(`listening on port ${port}`));

