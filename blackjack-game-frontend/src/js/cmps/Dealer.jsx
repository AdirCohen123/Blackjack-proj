import { useSelector } from 'react-redux'
import backcard from '../../assets/images/background-card.png'
const Dealer = ({dealer}) => {
    const {game} = useSelector(state => state.gameModule)
    return (
        <div className="dealer">
            <div className='cards'>
            {dealer.cards.map((card,index) => {
                if (game.isDealerPlay) {
                    return (
                        <div className="dealer-card" key={card.code + index}>
                            <img src={card.image} alt="" />
                        </div>
                    )
                } else {
                    return (
                        <div className="dealer-card" key={card.code}>
                        <img src={dealer.cards.length === 2 && index === 1 ? card.image : backcard} alt="" />
                    </div>
                )
            }
            })}
            </div>
            <div className="dealer-sum">
                <div className="circle">
                    {game.isDealerPlay ? dealer.sum : dealer.hiddenSum}
                </div>
                <div>
                    <h1>Dealer</h1>
                </div>
            </div>
        </div>
    )
}
export default Dealer