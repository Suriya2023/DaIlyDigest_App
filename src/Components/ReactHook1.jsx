import React, {useState , useEffect}  from 'react'

function ReactHook1() {
    const [count, setCount] = useState(0);


     // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
    

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
