// import React, { useState } from 'react'

// const Incrementer = () => {
//     const [counter, setCounter] = useState(0)

//     return (
//         <div>
//             <h1>{counter}</h1>
//             <button onClick={() => setCounter(counter + 1)}>+</button>
//             <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>-</button>
//         </div >
//     )
// }

// export default Incrementer

import React, { Component } from 'react'

export class Incrementer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = { counter: 0 }
    }
    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>+</button>
                <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
            </div>
        )
    }
}

export default Incrementer
