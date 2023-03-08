import { useState } from 'react';

function Counter() { 
  const [count, setCount ] = useState(0);

  const handleClick = () => {
    return setCount(count+1);
  };

  const decClick = () => { 
    return setCount(count-1);
  };

  return (<div>
    <div>Count:{count}</div>
    <button onClick={handleClick}>increase</button>
    <button onClick={decClick}>decrease</button>
  </div>);
}

export default Counter;