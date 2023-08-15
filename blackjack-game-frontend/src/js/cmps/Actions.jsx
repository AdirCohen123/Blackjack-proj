import { useDispatch } from "react-redux"

const Actions = ({ player, onHit, onStand,game }) => {
    const dispatch = useDispatch()
    const onDoubleBet = () => {
        if (player.bet * 2 > player.amount) return
        else dispatch({type: 'UPDATE_BET' , bet:player.bet * 2})
    }
    return (
        <div className="actions">
            <div className="hit">
                <button className="action-btn" onClick={(ev) => {
                    ev.preventDefault()
                    if (game.isDealerPlay) {
                        return
                    }
                    onHit()
                }}>
                    Hit
                </button>
            </div>
            <div className="bet">
                <button className="double-btn" onClick={(ev) => {
                    
                    ev.preventDefault()
                    if(game.isDealerPlay) {
                        return
                    }
                    onDoubleBet()
                }}>
                    Double
                </button>
                <h1>
                    {player.bet}$
                </h1>
            </div>
            <div className="stand">
                <button className="action-btn" onClick={(ev) => {
                    ev.preventDefault()
                    onStand()
                }}>
                    Stand
                </button>
            </div>
        </div>
    )
}
export default Actions