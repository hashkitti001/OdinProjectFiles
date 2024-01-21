import './App.css';
import React from "react";
import { Box } from '@mui/material';
import Board  from './components/Board';
function App(){
    return (
      <div className="App">
      <Box>
      <h1 className="text-4xl text-white text-center ">Anime Memory Cards Game</h1>
       <h3 className="text-4md text-white text-center m-2">Select two cards, without clicking a pair you've clicked before</h3>
       </Box> 
       
      <Board/>
  
      </div>
    )
  }

export default App;