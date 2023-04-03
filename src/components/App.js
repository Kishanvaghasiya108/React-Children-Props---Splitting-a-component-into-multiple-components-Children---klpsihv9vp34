import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
 const [square,setSquare] = useState(0);

 const changeHandler = (e) => {
  // console.log(e.target)
  setSquare(Number(e.target.value)*Number(e.target.value))


 }
  return (
    <div id="main">
      <ChildComponent /> 
       <input id='input' onChange={changeHandler} />
    
      <p id='output'>{square}</p>
    </div>
  )
}


export default App;
