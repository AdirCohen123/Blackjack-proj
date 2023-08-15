import { useSelector } from "react-redux";
import "./assets/style/Base.scss";
import BlackJack from "./js/cmps/BlackJack";
import Home from "./js/cmps/Home";


function App() {
  const {game} = useSelector(state => state.gameModule)
  return (
    <div className="App">
      {game.isOn ? <BlackJack /> : <Home />}
    </div>
  );
}

export default App;
