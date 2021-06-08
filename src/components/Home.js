import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <Link to="/tictactoe">
                <button>TicTacToe</button>
            </Link>
            <Link to="/increment">
                <button>increment</button>
            </Link>

        </div>
    )
}

export default Home
