import "./App.css";
import ListContainer from "./Component/ListContainer";
import ToDo from "./Component/ToDo";

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl uppercase font-bold my-10 text-green-500">
        Welcome to my app
      </h1>
      <ToDo />
      <ListContainer />
    </div>
  );
}

export default App;
