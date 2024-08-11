import React, {useState} from 'react';

const App = () => {
  const [testVar, setTestVar] = useState("value1");
  return (
    <div>
      <h1>•••••••••••••••••••••••••••••{testVar}••••••••••••••••••••••••••••••••••••</h1>
      <button onClick={() => setTestVar('value2')}>changeit</button>
    </div>
  );
};

export default App;
