import "./App.css";
import { useState } from "react";
import Name from "./components/Name.js"
import Parents from "./components/Parents.js";

function App() {
  const personal = {
    name : "Shriram",
    age  : 18,
    city : "chennai"
  }
  const [number, setNumber] = useState(0);
  const [num,changenum] = useState(0);
  const [item,setItem] = useState([]);
  const [count,setCount] = useState (1);


  function addItem(){
    let itemname = 'item'+count
    setItem((previousState) => {return[...previousState,itemname]})
    setCount((previousState) => {return previousState+1})
  }


  console.log(item)
   return (
    <div>
      <h1 id="count">{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
    <h1>Hello world</h1>
    <h2>number:{num}</h2>
    <button onClick={()=> changenum(num+1)}>increase</button>
    <button onClick={()=> changenum(num-1)}>decrease</button>
    <h1>List</h1>
    <button onClick={addItem}>add Item</button>
    <ul>{
      item.map((el,index) => <li key={index}>{el}</li>) 
    }</ul>
    
    <Name personal={personal}/>
    <Parents/>
     </div>
  );
}
export default App;