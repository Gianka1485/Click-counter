import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [trans, setTrans] = useState(.1);

  const addCount = () => {
    setCount(count + 1);
    setTrans(.1)
  };

  const restart = () => {
    setCount(0);
    setTrans(.5);
  }

  return (
    <div className="App">
      <div className="main-container">
        <Counter number={count} delay={trans}/>
        <Button 
          text="Click"
          isButtonClick={true}
          controlClick={addCount}
        />
        <Button 
          text="Restart"
          isButtonClick={false}
          controlClick={restart}
        />
      </div>
    </div>
  );
}

export default App;