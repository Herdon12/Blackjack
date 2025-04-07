import React, { use, useState } from 'react';

const Game = () => {
    const [deck, setDeck] = useState([]);
    const [playerHand, setPlayerHand] = useState([]);
    const [dealerHand, setDealerHand] = useState([]);
    const [gameStatus, setGameStatus] = useState('playing');

    const initializeDeck = () => {
        const Suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const Vales = ['2', '3', '4', '4', '5', '6', '7', '8', '9', '10', 'J','Q', 'K','A']
        const newDeck = [];
        Suits.forEach(suit => {
            values.forEach(value => {
                newDeck.push({suit, value})
            });
        });
        setDeck(newDeck)
    }
    const dealCards= () => {
        const newPlayerHand = [deck.pop(), deck.pop()];
        const newDelearHand = [deck.pop(), deck.pop()];
        setPlayerHand(newPlayerHand);
        setDealerHand(newDelearHand);

    }
    const startGame = () => {
        initializeDeck();
        dealCards();
        setGameStatus('playing');
    }
    return (
        <div>
            <button onClick={startGame}>Start Game</button>
            <div>
                <h2>Players Hand</h2>
                {playerHand.map((card, index) => (
                    <div key={index}>{card.value} of {cardsuit}</div>
                ))}
            </div>
            <div>
                <h2>Dealers Hand</h2>
                {dealerHand.map((card, index)=> (
                    <div key={index}>{card.value} of {card.suit}</div>
                ))}
            </div>
        </div>
    );
};

export default Game;