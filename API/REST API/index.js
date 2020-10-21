const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const {userRouter, carRouter } = require('./routes/container');
const expressConfigFunction = require('./config/express');
const databaseUrl = config.dbURL;


const app = express();


mongoose.connect(databaseUrl, {

    useNewUrlParser: true,
    useUnifiedTopology: true

} , (err) => {

    if(err) {
        console.log(err);
        throw new Error;
    }

    console.log('Database is setup and running');

})

expressConfigFunction(app);

app.use('/api/user' , userRouter);
app.use('/api/car', carRouter);
app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))

app.listen(config.port, console.log(`Listening on port ${config.port}!`));