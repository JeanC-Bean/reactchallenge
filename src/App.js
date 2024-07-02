import React, {useState} from 'react'
import './App.css';

const App = () => {
const [number, setCount] = useState(0);
 return(
   <div>
     <h1>{number}</h1>
     <button onClick={()=>{setCount(number+1)}}>Increase</button>
     <button onClick={()=>{setCount(number-1)}}>Decrease</button>
     <button onClick={()=>{setCount(0)}}>Reset</button>
   </div>
 )


} 


export default App;
