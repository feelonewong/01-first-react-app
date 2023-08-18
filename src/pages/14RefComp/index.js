import React, { useEffect, useRef } from 'react'
import ChildComp from './child'
function RefComp() {
  const pRef = useRef(null);
  const hRef = useRef(null);
  useEffect(()=>{
    console.log(pRef.current)
  },[])
  function handleClick(){
    console.log(pRef.current)
  }
  function handleGetChildCompAttribute(){
    console.log(hRef.current.tagHandle())
  }
  return (
    <div>
        <p ref={pRef}>我是P元素</p>
        <button onClick={handleClick}>点击</button>
        <hr/>
        <ChildComp ref={hRef}></ChildComp>
        <button onClick={handleGetChildCompAttribute}>获取子组件实例</button>
    </div>
  )
}

export default RefComp   

