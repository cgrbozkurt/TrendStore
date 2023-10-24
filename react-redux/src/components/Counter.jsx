import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
  const counter=useSelector((state)=>state.counter)
const dispatch=useDispatch()

  const incrementHandler = () => {
    dispatch({type:"INCREMENT"})
  };
  const increaseHandler = () => {
    dispatch({type:"INCREASE", amount:5})
  };
  const decrementHandler = () => {
    dispatch({type:"DECREMENT"})
  };
  const toggleCounterHandler = () => {};

  return (
    <main>
      <h1>Redux Counter</h1>
      <b> {counter} </b> <br />
      <button onClick={incrementHandler}>İncrease</button>
      <button onClick={increaseHandler}>İncrease 5</button>
      <button onClick={decrementHandler}>Decrease</button> <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
