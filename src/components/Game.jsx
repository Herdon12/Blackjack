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
    initializeDeck()
    console.log(deck)
}