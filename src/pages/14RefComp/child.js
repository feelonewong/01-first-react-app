import React, { forwardRef, useImperativeHandle,useRef } from 'react'

function ChildComp(props,ref) {
  const childRef = useRef(null);
  
  function handleTag(){
    console.log(childRef.current)
    console.log('子组件: this is tag')
  }
  useImperativeHandle(ref, ()=>{
    return {
        tagHandle: handleTag
    }
  })
  return (
    <div>
        <h2 ref={childRef} onClick={handleTag}>我是一个子组件的h2标签</h2>
    </div>
  )
}

export default  forwardRef(ChildComp);     