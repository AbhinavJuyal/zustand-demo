import "./App.css";
import { useStore } from "./store/store";

function App() {
  const { count, incCount, decCount, multiplier, twice, divide } = useStore();
  return (
    <div className="App">
      I am here!
      <div className="">
        {count}
        <button onClick={() => incCount()}>Add</button>
        <button onClick={() => decCount()}>Subtract</button>
      </div>
      <div className="">
        {multiplier}
        <button onClick={() => twice()}>Twice</button>
        <button onClick={() => divide()}>Divide</button>
      </div>
    </div>
  );
}

export default App;
