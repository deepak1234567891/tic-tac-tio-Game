 import React, { useState } from "react";
 import Square from "./Square";
import "bootstrap/dist/css/bootstrap.min.css";  //Import Bootstrap CSS

 const Board = () => {
   const [state, setState] = useState(Array(9).fill(null));
   const [isXTurn, setIsXTurn] = useState(true);

   const checkWinner = () => {
     const winnerLogic = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6],
     ];

     for (let logic of winnerLogic) {
       const [a, b, c] = logic;
       if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
         return state[a];
       }
     }

     return false;
   };

   const isWinner = checkWinner();

   const handleClick = (index) => {
     if (state[index] !== null) {
       return;
     }
     const copyState = [...state];
     copyState[index] = isXTurn ? "X" : "O";
     setState(copyState);
     setIsXTurn(!isXTurn);
   };

   const handleReset = () => {
     setState(Array(9).fill(null));
   };

   return (
       <div className="container d-flex justify-content-center align-items-center min-vh-100">
     <div className="board-container">
       {isWinner ? (
         <>
           {isWinner} won the game{" "}Tio
           <button className="btn btn-success" onClick={handleReset}>Play Again</button>
         </>
       ) : (
         <>
         <div className="header d-flex " >
         <h1 style={{color:"green",fontFamily:"fantasy"}}>dPv</h1>
         <h6 style={{color:"light greenyellow",fontFamily:"sans-serif"}}>Tic-Tac-Tie</h6>
         <h4 style={{color:"brown"}}>Game</h4>
         </div>

           <h4 style={{color:"red"}}>Player {isXTurn ? "X" : "O"} please move</h4>
           <div className="board-row">
             <Square  onClick={() => handleClick(0)} value={state[0]} />
             <Square  onClick={() => handleClick(1)} value={state[1]} />
             <Square  onClick={() => handleClick(2)} value={state[2]} />
           </div>
           <div className="board-row">
             <Square onClick={() => handleClick(3)} value={state[3]} />
             <Square onClick={() => handleClick(4)} value={state[4]} />
             <Square onClick={() => handleClick(5)} value={state[5]} />
           </div>
           <div className="board-row">
             <Square onClick={() => handleClick(6)} value={state[6]} />
             <Square onClick={() => handleClick(7)} value={state[7]} />
             <Square onClick={() => handleClick(8)} value={state[8]} />
           </div>
         </>
       )}
     </div>
       </div>
   );
 };

 export default Board;


{/* import React, { useState } from "react";
import Square from "./Square";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  // ... your existing code ...

  return (
    
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="board-container">
        {isWinner ? (
          
            {isWinner} won the game{" "}
            <button onClick={handleReset}>Play Again</button>
          
        ) : (
          
            <h4>Player {isXTurn ? "X" : "O"} please move</h4>
            <div className="board-row">
              <Square onClick={() => handleClick(0)} value={state[0]} />
              <Square onClick={() => handleClick(1)} value={state[1]} />
              <Square onClick={() => handleClick(2)} value={state[2]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(3)} value={state[3]} />
              <Square onClick={() => handleClick(4)} value={state[4]} />
              <Square onClick={() => handleClick(5)} value={state[5]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handleClick(6)} value={state[6]} />
              <Square onClick={() => handleClick(7)} value={state[7]} />
              <Square onClick={() => handleClick(8)} value={state[8]} />
            </div>
          
        )}
      </div>
    </div>
    
  );
};

export default Board; */}
