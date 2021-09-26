import "./App.css";
import Developer from "./components/Developer/Developer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Developer></Developer>
      </div>
    </>
  );
}

export default App;
