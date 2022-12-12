import express from 'express';
import mongoose from "mongoose";

mongoose.connect(process.env.DB_CONNECTION_STRING);

const app = express()

app.get('/', (req, res) => {
    res.send('Bro!')
});

app.listen(process.env.PORT || 4000);