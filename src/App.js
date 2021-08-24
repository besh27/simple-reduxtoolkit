import "./styles.css";
import { Counter } from "./Counter";
import { useSelector } from 'react-redux';

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const curState = useSelector((state) => state);
  console.log(count, curState);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Current Count: {count}</p>
      <Counter />
    </div>
  );
}
