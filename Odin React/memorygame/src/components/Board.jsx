import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Card from "../components/Card";
import "../styles/Board.css"
import animeCards from "./Images"
const Board = () => {
   
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
                    <h1 className="name text-white text-3xl ">Score: {score}</h1>
                    <h1 className="name text-white text-3xl">Best Score: {bestScore}</h1>


                </Box>

            </div>
        </div>
    )
}

export default Board;
