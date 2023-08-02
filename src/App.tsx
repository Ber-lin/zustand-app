import "./App.css";
import { usePersonStore } from "./store/person";
import Person from "./Person";
import Demo from "./Demo";

function App() {

  const { name, age, increase } = usePersonStore();

  return (
    <>
      <div>
        name:{name}
        age:{age}
      </div>
      <button onClick={increase}>click</button>
      <Person/>
      <Demo/>
    </>
  );
}

export default App;
