import "./App.css";
import { useState } from "react";

function App() {
  const [listItem, setListItem] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleAddList() {
    if (inputValue.trim() !== "") {
      setListItem([...listItem, inputValue]);
      setInputValue("");
    }
  }

  return (
    <div className="App">
      <div className="shopping-card">
        <h1>Shopping List</h1>
        <div className="add-items-box">
          <input
            type="text"
            placeholder="Add an item..."
            value={inputValue}
            onChange={handleInputValue}
          />
          <button onClick={handleAddList}>+</button>
        </div>
        <div className="items-list">
          <ul>
            {listItem.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="total-amount">
          <h2>Total: {listItem.length}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
