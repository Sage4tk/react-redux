//redux
import { useSelector, useDispatch } from "react-redux";

//redux actions
import { increment, decrement, log } from "./actions";

const App:React.FC = () => {
  //access counter state
  const counter = useSelector((state:any) => state.counter);

  //access logged state
  const isLogged = useSelector((state:any) => state.isLogged);

  const dispatch = useDispatch();

  return (
    <>
    <div className="container">
      <h1>Counter {counter}</h1>
      <div>
        <button data-testid="btn1" onClick={() => dispatch(increment(1))}>+</button>
        <button data-testid="btn2" onClick={() => dispatch(decrement(1))}>-</button>
      </div>
    </div>
    <div className="container">
      {isLogged ? <h3>Is logged in.</h3>:""}
      <button data-testid="log-btn" onClick={() => dispatch(log())}>{isLogged ? "Log out":"Log In"}</button>
    </div>
    </>
  );
}

export default App;
