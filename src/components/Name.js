
function Name(props) {
    // This is first way
    const {name,age,city} = props.personal

    //This is second way
    // const {personal} = props;
    // const {name,age,city} = personal

   return(
    <>
     <h1>My name is {props.personal.name}</h1>
     <h1>My name is {name}</h1>
     <h1>I'm {age} years old</h1>
     <h1>I'm {props.personal.age} years old</h1>
     <h1>I'm live in {city}</h1>
    </>
   
   )
}

export default Name;