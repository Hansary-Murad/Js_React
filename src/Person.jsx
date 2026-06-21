const Person = (props) => {

    return (
        <div>
            <span>Name: {props.name}</span>, 
            <span>SecondName: {props.secondName}</span>
        </div>
    )
}

export default Person