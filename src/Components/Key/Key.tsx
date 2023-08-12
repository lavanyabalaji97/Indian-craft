import React, { useState } from 'react';

function Key() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const handleButtonClick = () => {
    const newItem = { id: items.length+1, text: 'New Item' };
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <h1>Missing Key Property Issue</h1>
      <button onClick={handleButtonClick}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Key;
