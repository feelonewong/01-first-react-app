function ChildValue(props){
    return (
        <div>
            <p>{props.text}</p>
            <button onClick={props.onInputChange}>修改父组件传值</button>
        </div>
    )
}

export default  ChildValue;