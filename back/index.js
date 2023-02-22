const valditor = require('../back/module').valditor;
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const str = 'jwt-test';
const secretKey = Buffer.from(str,'base64');

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.get('/', (req, resp, next) => {

    const token = jwt.sign(
                    { 
                        session: 'haha',
                        // exp : Math.floor( ( ( new Date().getTime() - 3610000 ) / 1000 ) + 60 * 60 ), 
                        exp : Math.floor( (  new Date().getTime() / 1000 ) + 60 ), 
                    }, secretKey);
    const object = {};
    const message = 'hello world!!';

    object.message = message;
    object.token = token;

    resp.json(object);
});

app.get('/test/session/', (req, resp, next) => {

    const sessionToken = (req.headers.authorization).split(' ');

    const type = sessionToken[0];
    const token = sessionToken[1];

    console.log('type = ' + type);
    console.log('token = ' + token);

    let temp;
    const object = {};

    try {
        temp = jwt.verify(sessionToken[1], secretKey); 
        console.log(temp);
        valditor(temp);
    } catch (TokenExpiredError) {
        
        
        return resp.status(401).json(object);
    }

    console.log('now = ' + Math.floor( new Date().getTime() / 1000 ) );
    object.message = 'ok';
    resp.status(200).json(object);
});


app.listen(port, () => {
    console.log(`server is on ${port}`)
});