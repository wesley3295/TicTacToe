import React, { useState } from 'react'
import Gameboard from './Gameboard'
const GameContainer = () => {
    const [turn, setTurn] = useState("X")

    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
    const winningCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    const handleClick = (e) => {
        if (e.target.innerHTML === "" && turn === "X") {
            e.target.innerHTML = turn
            const newArry = board
            newArry[e.target.id - 1] = turn
            setBoard(newArry)
            console.log(board)
            setTurn("O")

        } else if (e.target.innerHTML === "" && turn === "O") {
            e.target.innerHTML = turn
            const newArry = board
            newArry[e.target.id - 1] = turn
            setBoard(newArry)
            console.log(board)
            setTurn("X")
        }
    }

    const resetButton = (e) => {
        const boxes = document.querySelectorAll(".gameboard__box")
        console.log(boxes)
        boxes.forEach(element => element.innerHTML = "")
    }

    const CheckWinningCombo = () => {
        
    }

    return (
        <div>
            <Gameboard turn={turn} handleClick={handleClick} resetButton={resetButton} />
        </div>
    )
}

export default GameContainer

