import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCard, getFirstCards } from '../store/action'
import Dealer from "./Dealer"
import Actions from "./Actions"
import Player from "./Player"
const Game = () => {
    const { deck, player, dealer,game } = useSelector(state => state.gameModule)
    const dispatch = useDispatch()
    useEffect(() => {
        const quaryFirstCards = async () => {
            try {
                const cards = await dispatch(getFirstCards(deck.deck_id, 4))
            } catch (error) {
                throw error
            }
        }
        !player.cards.lenght && !dealer.cards.lenght && quaryFirstCards()
    }, [])

  
    const onHit = async () => {
        try {
            const card = await dispatch(getCard(deck.deck_id, 1,player.cards, false))
        } catch (error) {
            throw error
        }
    }

    const onStand = () => {
        dispatch({type: 'SET_DEALER_PLAY', isDealerPlay:true})
    }

    return (
        <div className="game-area">
            <Dealer dealer={dealer}/>
            <Actions player={player} onHit={onHit} onStand={onStand} game={game}/>
            <Player player={player} />
        </div>
    )
}
export default Game