const initialState = {
    deck: null,
    game: {
        isOn: false,
        isDealerPlay: false,
    },
    player: {
        bet: 0,
        amount: 1000,
        cards: [],
        sum: 0,
    },
    dealer: {
        cards: [],
        sum: 0,
        hiddenSum: 0,
    },
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_GAME_ON":
            return { ...state, game: { ...state.game, isOn: action.isOn } };
        case "SET_DECK":
            return { ...state, deck: action.deck };
        case "SET_BET":
            const newAmount = state.player.amount - action.bet;
            return {
                ...state,
                player: { ...state.player, amount: newAmount, bet: action.bet },
            };
        case "SET_PLAYER_CARDS":
            return {
                ...state,
                player: { ...state.player, cards: action.cards, sum: action.sum },
            };
        case "SET_DEALER_CARDS":
            return {
                ...state,
                dealer: {
                    ...state.dealer,
                    cards: action.cards,
                    sum: action.sum,
                    hiddenSum: action.hiddenSum,
                },
            };
        case "ADD_PLAYER_CARD":
            return {
                ...state,
                player: {
                    ...state.player,
                    cards: [...state.player.cards, action.card],
                    sum: action.sum,
                },
            };
        case "ADD_DEALER_CARD":
            return {
                ...state,
                dealer: {
                    ...state.dealer,
                    cards: [...state.dealer.cards, action.card],
                    sum: action.sum,
                },
            };
        case "SET_DEALER_PLAY":
            return { ...state, game: { ...state.game, isDealerPlay: action.isDealerPlay } };
        case "FINISH_GAME":
            const scoreType = action.score;
            let updatedAmount = state.player.amount;
            if (scoreType !== 'lose') {
                updatedAmount = state.player.amount + (state.player.bet * (scoreType === 'tie' ? 1 :2))
            }
            updatedAmount = Math.max(updatedAmount, 0) || 1000;
            return {
                ...state,
                game: { ...state.game, isDealerPlay: false },
                player: {
                    ...state.player,
                    cards: [],
                    amount: updatedAmount,
                    sum: 0,
                    bet: 0,
                },
                dealer: {
                    ...state.dealer,
                    cards: [],
                    sum: 0,
                    hiddenSum: 0,
                },
            };
        case "UPDATE_BET":
            return { ...state, player: { ...state.player, bet: action.bet } };
        default:
            return state;
    }
};
