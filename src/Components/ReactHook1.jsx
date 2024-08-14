import React, {useState}  from 'react'

function ReactHook1() {
    const [count, setCount] = useState(0);

    
    

//    Clikcounter = () => {
//         setCount(count + 1000000000);
//     }
 
  return (
    <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 100000000)}>
      Click me
    </button>
  </div>
  )
}

export default ReactHook1
