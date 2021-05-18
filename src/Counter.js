import React, {useReducer} from 'react'

const initialState = {count: 0};

const reducer = (state, action) => {
    if (action.type === 'increment') {
        return {count: state.count + 10}
    } else if (action.type === 'decrement') {
        return {count: state.count - 10}
    } else {
        console.log('error');
    }
}

export default function Counter() {

    const [state, dispatch] = useReducer(reducer, initialState);

    const incrementHandler = () => {
        dispatch({type: 'increment'});
    }

    const decrementHandler = () => {
        dispatch({type: 'decrement'});
    }

    return (
        <div>
            <p>Counter: {state.count}</p>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    )
}
