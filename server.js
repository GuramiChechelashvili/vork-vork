import express from "express";
import { json, urlencoded } from 'express';
import morgan from "morgan";
import config from './src/config/index';
import { connect } from "./src/utils/db";
import path from 'path';


import productRouter from './src/resources/product/product.router';
import userRouter from './src/resources/user/user.router';
const app = express();

app.use(express.static("public"));
app.use(json() )
app.use( urlencoded({ extended: true}) )
app.use( morgan('dev') );
app.use('/api/user', userRouter);
// app.use('/api/user/login', userRouter);
app.use('/api/product', productRouter);

// IIFE
(async () => {
    try {
        await connect();
        app.listen(config.port, () => {
            console.log(`http://localhost:${config.port}`)
        })
    }
    catch(err) {
        console.err(err);
    }
})();

