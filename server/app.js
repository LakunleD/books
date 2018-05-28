"use strict";
const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/schema');

const app = express();

//allow cross origin request
app.use(cors());

mongoose.connect('mongodb://localhost:27017/graphqlbooks')


mongoose.connection
    .once('open', () => {
        console.log('connected to mongodb');
        app.listen(4000, () => {
            console.log('server running on port 4000')
        });
    })
    .on('error', function (err) {
        console.log(err);
    });


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

