import { useDispatch } from 'react-redux'
import blackjack from '../../assets/images/blackjack.png'
import { getDeck } from '../store/action'
const Home = () => {
    const dispatch = useDispatch()
    const onPlayClick = async () => {
        const res = await dispatch(getDeck())
        dispatch({ type: 'SET_GAME_ON', isOn: true })
    }
    return (
        <div className="home">
            <div className="game-logo">
                <img src={blackjack} alt="" />
            </div>
            <div className='play-btn'>
                <button onClick={() =>{
                    onPlayClick()
                }}>Play</button>
            </div>
        </div>
    )
}

export default Home