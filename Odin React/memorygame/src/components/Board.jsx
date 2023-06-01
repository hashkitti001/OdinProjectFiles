import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Card from "../components/Card";
import "../styles/Board.css"
import deidara from "../images/deidara.jpeg";
import gaara from "../images/gaara.jpeg";
import madara from "../images/madara.jpeg";
import Naruto from "../images/Naruto.jpeg";
import obito from "../images/obito.jpeg";
import pain from "../images/pain.jpeg";
import Sakura from "../images/Sakura.jpeg";
import Sasuke from "../images/Sasuke.jpeg";
const Board = () => {
    const animeCards = [
        {
            name: "Deidara",
            id: 1,
            image: deidara
        },
        {
            name: "Gaara",
            id: 2,
            image: gaara
        },
        {
            name: "Madara",
            id: 3,
            image: madara
        },
        {
            name: "Naruto",
            id: 4,
            image: Naruto
        },
        {
            name: "Obito",
            id: 5,
            image: obito
        },
        {
            name: "Pain",
            id: 6,
            image: pain
        },
        {
            name: "Sakura",
            id: 7,
            image: Sakura
        },
        {
            name: "Sasuke",
            id: 8,
            image: Sasuke
        }
    ]
    const [cardState, setCardState] = useState(animeCards);
    const [clickedCards, setClickedCards] = useState([]);
    let [score, setScore] = useState(0);
    let [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        const hasDuplicates = clickedCards.some(
            (val, i) => clickedCards.indexOf(val) !== i
        );
        if (hasDuplicates) {
            setClickedCards([]);
            setBestScore(score);
        }
        else {
            setScore(clickedCards.length);
        }
    }, [score, clickedCards]);
    let handleClick = (id) => {
        let unshuffledCards = [...animeCards];
        let shuffledCards = unshuffledCards
            .map((value) => ({ value, sort: Math.random() * unshuffledCards.length }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        setCardState(shuffledCards);
        setClickedCards((prevArray) => [...prevArray, id]);
    }

    return (
        <div>
            <div className="board">
                {cardState.map((card) => {
                    return (<Card id={card.id} image={card.image} name={card.name} handleClick={handleClick} />);
                })}
            </div>
            <div>
                <Box sx={{ width: "100%", height: "40px", display: "flex", flexDirection: "row", justifyContent: "space-between", color: "white" }}>
                    <h1 className="name text-3xl ">Score: {score}</h1>
                    <h1 className="name text-3xl">Best Score: {bestScore}</h1>


                </Box>

            </div>
        </div>
    )
}

export default Board;