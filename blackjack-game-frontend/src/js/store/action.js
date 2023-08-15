import { gameService } from "../services/game.service"
import { utilsService } from "../services/utils.service"

export const getDeck = () => {
    return async (dispatch) => {
        try {
            const deck = await gameService.getDeck()
            dispatch({
                type: 'SET_DECK',
                deck
            })
            return deck
        } catch (err) {
            throw err
        }
    }
}
export const getFirstCards = (deckId, count) => {
    return async (dispatch) => {
        try {
            const cards = await gameService.getCard(deckId, count)
            const playerCards = [cards[0], cards[2]]
            const dealerCards = [cards[1], cards[3]]
            const filteredDealerCard = dealerCards.filter((card, index) => index !== 0)
            const playerSum = utilsService.calculateSum(playerCards)
            const dealerSum = utilsService.calculateSum(dealerCards)
            const dealerHiddenSum = utilsService.calculateSum(filteredDealerCard)
            dispatch({
                type: 'SET_PLAYER_CARDS',
                cards: playerCards,
                sum: playerSum
            })
            dispatch({
                type: 'SET_DEALER_CARDS',
                cards: dealerCards,
                sum: dealerSum,
                hiddenSum: dealerHiddenSum
            })
            return { playerCards, dealerCards }
        } catch (err) {
            throw err
        }
    }
}

export const getCard = (deckId, count, cards, isDealer = false) => {
    return async (dispatch) => {
        try {
            const card = await gameService.getCard(deckId, count)
            const newCards = [...cards, card[0]]
            const sum = utilsService.calculateSum(newCards)
            if (isDealer) {
                dispatch({
                    type: 'ADD_DEALER_CARD',
                    card: card[0],
                    sum
                })
            } else {
                dispatch({
                    type: 'ADD_PLAYER_CARD',
                    card: card[0],
                    sum
                })
            }

            return card
        } catch (err) {
            throw err
        }
    }
}
