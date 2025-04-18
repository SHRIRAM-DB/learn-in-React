import Child from '../components/Child.js'
import { useState,useEffect } from 'react';

function Parents(){
    const [name,SetName] = useState("Shriram");
    const [age,SetAge] = useState(20);
    const [group,SetGroup] = useState("React");
    const [image,SetImage] =  useState("https://picsum.photos/id/237/200/300");
    const [flag,SetFlag] = useState(false);

     useEffect(() => {
        console.log("hello world")
     },[name])

     useEffect(() => {
        console.log(flag)
     },[name,flag])

     useEffect(() => {
        console.log("hello")
     },[])

    return(
        <div>
            <Child name={name} age={age} group={group} image={image} setName={SetName}/>
            <button onClick={() => SetFlag((pre) => !pre)}>Click</button>
        </div>
    )
}

export default Parents; 