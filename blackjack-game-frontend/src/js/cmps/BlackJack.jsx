import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "../store/action";
import TakeBet from "./TakeBet";
import Game from "./Game";
import Modal from "./Modal";

const BlackJack = () => {
    const { deck, player, game, dealer } = useSelector(state => state.gameModule);
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false);
    const [score, setScore] = useState('win');

    const checkPlayerBust = () => {
        if (player.sum > 21) {
            finishGame('lose');
            return true;
        }
        return false;
    };

    const checkDealerPlay = () => {
        if (game.isDealerPlay && dealer.sum < 17) {
            dealerPlay();
        } else if (game.isDealerPlay) {
            finishGame(checkWinnerAndFinish());
        }
    };

    const checkWinnerAndFinish = () => {
        let result = 'tie';
        if (player.sum > dealer.sum || dealer.sum > 21) {
            result = 'win';
        } else if (player.sum < dealer.sum) {
            result = 'lose';
        }
        return result;
    };

    const checkPlayerBlackjack = () => {
        if (player.sum === 21) {
            dispatch({ type: 'SET_DEALER_PLAY', isDealerPlay: true });

            if (dealer.sum === 21) {
                finishGame('tie');
            } else if (dealer.sum < 17) {
                dealerPlay();
            } else {
                finishGame(checkWinnerAndFinish());
            }
        }
    };

    useEffect(() => {
        if (checkPlayerBust()) return;
        checkPlayerBlackjack();
        checkDealerPlay();
    }, [player.sum, game.isDealerPlay, dealer.sum]);

    const onSetBet = (bet) => {
        dispatch({ type: 'SET_BET', bet });
    };

    const dealerPlay = async () => {
        setTimeout(async () => {
            await dispatch(getCard(deck.deck_id, 1, dealer.cards, true));
        }, 1200);
    };

    const finishGame = (score) => {
        setOpenModal(true);
        setScore(score);
        setTimeout(() => {
            dispatch({ type: 'FINISH_GAME', score });
            setOpenModal(false);
        }, 2400);
    };

    return (
        <div className="blackjack">
            {!player.bet ?
                <TakeBet onSetBet={onSetBet} player={player} />
                :
                <Game />
            }
            {openModal && <Modal score={score} />}
        </div>
    );
};

export default BlackJack;



