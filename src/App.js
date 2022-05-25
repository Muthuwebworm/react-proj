import { useEffect, useState } from 'react';
import styledComponents from 'styled-components';
import './App.css';

function App() {
  let colorValue = 'blue';
  const Wrapper = styledComponents.div`
    border: 1px solid red;
    width: 100px;`;
  const Button = styledComponents.button`background-color: ${colorValue}`;  
 

  
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count % 2) {
      colorValue = 'black';
    }
  },[count])

  return  <Wrapper className="container">Output: {count}<Button onClick = {() => setCount(() => count+5)}>Add 5 </Button></Wrapper>;  
}

export default App;
