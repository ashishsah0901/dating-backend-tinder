import express from "express";
import mongoose from "mongoose";
import Cards from "./models/dbCards.js";
import Cors from 'cors';

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'MONGOD URL'

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url);

// API endpoints
app.get('/', (_, res) => res.status(200).send('hello world'));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            return res.status(500).send('Internal server error');
        }
        res.status(201).send(data);
    })
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send(data);
    })
})

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
