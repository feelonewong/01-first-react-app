import { useState, lazy, Suspense } from "react";
import svg from '../../logo.svg'
import {ReactComponent as Logo } from '../../logo.svg'
const About = lazy(()=>delay(3000).then(()=>import('pages/11ReactComponentSuper/About')))
function  delay(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms)
    })
}
function LazyComp(){
    const [flag, setFlag] = useState(false);
    const [text, setText] = useState('隐藏')
    const [uncontrollerValue, setUnControllerValue] = useState('')
    function handleToggleAbout (){
        setFlag((prev)=>{
            if(prev){
                setText('隐藏')
            }else {
                setText('显示')
            }
            return !prev
        })
    }
    function handleUnControllerInput(val){
        setUnControllerValue(val)
    }
    return <>
        <h1>这是一个懒加载组件</h1>
        {flag&& <Suspense fallback={<div>loading...</div>}><About></About></Suspense>}
        <button onClick={handleToggleAbout}>{text}关于</button>
        <hr></hr>
        <h3>SVG的导入3种方式</h3>
        <img alt="" src={svg} width="80"  /> <br></br>
        <Logo width="100" height="100" fill="#ff0000"></Logo>
        <hr/>
        <h3>非受控组件</h3>
        <p>{uncontrollerValue}</p>
        <UnControllerComp onInputX={handleUnControllerInput}></UnControllerComp>
    </>
}

function UnControllerComp({onInputX}){
    const [inputVal, setInputVal] = useState('')
    function handleChange(e){
        setInputVal(e.target.value)
        onInputX(e.target.value)
    }
    return(
        <>
            <input value={inputVal} onChange={handleChange} />
        </>
    )
}

export default LazyComp;