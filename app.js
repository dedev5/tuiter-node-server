import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('Bro!')
});

app.listen(process.env.PORT || 4000);