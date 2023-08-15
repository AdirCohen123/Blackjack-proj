import { useSelector } from "react-redux"

const Player = ({ player }) => {
    return (
        <div className="player">
            <div className="cards">
                {player.cards.map((card,idx) => {
                    return (
                        <div className="player-card" key={card.code + idx}>
                            <img src={card.image} alt="" />
                        </div>
                    )
                })}
            </div>
            <div className="sum">
                <div className="circle">
                    {player.sum}
                </div>
                <div>
                    <h1>Player</h1>
                </div>
            </div>
        </div>
    )
}
export default Player