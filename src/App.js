import './App.css';
import React from 'react';

const { useState } =React;

const App=() => {
  const[k, setValue]=useState(0);
  const handleChange = (e) => setValue(e.target.value);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Calculate the nth number in the fibonacci sequence
        </p>
          <input type="number" value={k} onChange={handleChange}/><br/>
        {printFib(k)}
      </header>
    </div>
  );
}

function printFib(k)
{
  var fib_val=fib(k);
  return(
    <div>
      Result: {fib_val}
    </div>
  );
}
function fib(k)
{
  if(k==0)
  {
    return 0;
  }
  else if(k==1)
  {
    return 1;
  }
  else if(k>=130 || k<0)
  {
    return;
  }
  else
  {
    return fib(k-1)+fib(k-2);
  }
}

export default App;
