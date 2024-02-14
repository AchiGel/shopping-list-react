import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="shopping-card">
        <h1>Shopping List</h1>
        <div className="add-items-box">
          <input type="text" placeholder="Add an item..." />
          <button>+</button>
        </div>
        <div className="items-list">
          <ul>
            <li>item 1</li>
            <li>item 1</li>
            <li>item 1</li>
          </ul>
        </div>
        <div className="total-amount">
          <h2>Total: 1</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
