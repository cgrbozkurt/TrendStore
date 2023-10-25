import {useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store';


const Counter = () => {
  
  const counter=useSelector((state)=>state.counter)
  const showCounter=useSelector((state)=>state.showCounter)
const dispatch=useDispatch()

  const incrementHandler = () => {
  dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toogle())
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      <b> {showCounter && counter} </b> <br />
      <button onClick={incrementHandler}>İncrease</button>
      <button onClick={increaseHandler}>İncrease 5</button>
      <button onClick={decrementHandler}>Decrease</button> <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
