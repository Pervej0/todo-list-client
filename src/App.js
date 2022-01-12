import "./App.css";
import ToDo from "./Component/ToDo";

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl uppercase font-bold my-10 text-green-500">
        Welcome to my app
      </h1>
      <ToDo />
    </div>
  );
}

export default App;
