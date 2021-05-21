import React, { useReducer, useContext} from 'react'
import './Login.css'


const initialState = {count: 0};

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrease = () => {
    dispatch({ type: 'DECREMENT' });

  };
  
  return (
    <div className="box">
      <h1>Counter</h1>
      <p>Count: {console.log(state)}</p>

      <div>
        <button type="button" onClick={handleIncrease}className="button is-grey">
          +
        </button>
        <button type="button" onClick={handleDecrease} className="button is-dark">
          -
        </button>
      </div>
    </div>
  );
}

export default Login;