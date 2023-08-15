import axios from "axios"
const getDeck = async () => {
    try {
        const res = await axios.get('http://localhost:3001/api/getDeck')
        return res.data
    } catch (error) {
        throw error
    }
}

const getCard = async (deckId,count) => {
    try {
        const res = await axios.get('http://localhost:3001/api/getCards', { params: { deckId, count } });
        return res.data.cards
    } catch (error) {
        throw error
    }
}


export const gameService = {
    getDeck,
    getCard
}