import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  const styleH3 = { backgroundColor: "pink", color: "black" };
  let titulo = <h3 style={styleH3}>Tienda Online</h3>;

  return (
    <>
      <div className="App">
        <header className="App-header">
          <NavBar />
          {titulo}
          <ItemListContainer />
        </header>
      </div>
    </>
  );
}

export default App;