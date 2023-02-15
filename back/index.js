const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const str = 'jwt-test';
const secretKey = Buffer.from(str,'base64');

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get('/', (res, resp, next) => {

    const token = jwt.sign(
                    { 
                        session: 'haha',
                        // exp : Math.floor( ( ( new Date().getTime() - 3610000 ) / 1000 ) + 60 * 60 ), 
                        exp : Math.floor( (  new Date().getTime() / 1000 ) + 60 * 60 ), 
                    }, secretKey);
    const object = {};
    const message = 'hello world!!';

    object.message = message;
    object.token = token;

    resp.json(object);
});


app.listen(port, () => {
    console.log(`server is on ${port}`)
});