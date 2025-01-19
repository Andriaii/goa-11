// App.js or your React component file

import React from 'react';

const fruits = ["Apple", "Banana", "Cherry"];

function App() {
  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
