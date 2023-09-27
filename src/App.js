import { useState } from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
     
    </div>
  );
}


function counter(){
  const [count, setCount] = useState();




  return <div>
    <div>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      <span>Count: {count}</span>
    </div>
  </div>
}


export default App;
