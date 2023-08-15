import { useState } from "react"
import { useSelector } from "react-redux"

const TakeBet = ({ onSetBet,player}) => {
    const [bet,setBet] = useState(0)
    const handleInputChange = (event) => {
        setBet(event.target.value);
    };
    const checkVaildBet = () => {
        if (+bet > player.amount || +bet < 0 || +bet === 0) return false
        return true
    }
    return (
        <div className="take-bet">
            <h3>Hello you have {player.amount}$</h3>
            <div className="bet-input">
                <input
                    type="number"
                    id="betAmount"
                    name="betAmount"
                    value={bet}
                    onChange={handleInputChange}
                />
                <button onClick={(ev)=>{
                    ev.preventDefault()
                    const isValidBet = checkVaildBet()
                    if (isValidBet) {
                        onSetBet(bet)
                    }

                }}>BET</button>
            </div>
        </div>
    )
}

export default TakeBet