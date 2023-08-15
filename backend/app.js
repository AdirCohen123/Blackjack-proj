const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
const URL = "https://deckofcardsapi.com/api/deck";
const PORT = 3001;
const axios = require('axios');

app.get('/api/getDeck', async (req, res) => {
    try {
        const response = await axios.get(`${URL}/new/shuffle/?deck_count=2`);
        const deck = response.data;
        res.send(deck);
    } catch (error) {
        res.status(500).json(error);
    }
});
app.get('/api/getCards', async (req, res) => {
    try {
        const { deckId,count } = req.query;
        const response = await axios.get(`${URL}/${deckId}/draw/?count=${count}`);
        const cards = response.data.cards;
        res.json({ cards });
    } catch (error) {
        res.status(500).json({ error: 'Failed to draw a card.' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});