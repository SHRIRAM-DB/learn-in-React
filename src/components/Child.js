function Child(props){
    const {name,age,group,image,setName} =  props;
    return(
        <>
        <div>
            <img src={image} alt="DogImage" />
        </div>
        <div>
            <input onChange={(e) => {setName(e.target.value)}}></input><br/>
            <span>Name: {name}</span><br/>
            <span>age: {age}</span><br/>
            <span>group: {group}</span><br/>
        </div>
        </>
    )
}

export default Child;