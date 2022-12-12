import express from 'express';
import HelloController
    from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'

import mongoose from "mongoose";
mongoose.connect(process.env.DB_CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bro!')
});

TuitsController(app);
HelloController(app);
UserController(app);

app.listen(process.env.PORT || 4000);