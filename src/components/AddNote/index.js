import React, { useState } from "react";
import "./style.css";

function AddNote() {
  const [useInput, setUserInput] = useState('')
  const [useContent, setUserContent] = useState('')
  function handleAddNote(){
    console.log(useInput, useContent)
  }
  function handleInputChange(e){
    setUserInput(e.target.value)
  }
  function handleContentChange(e){
    setUserContent(e.target.value)
  }
  return (
    <div className="addNote">
      <h2>添加新笔记</h2>
      <form>
        <input type="text" placeholder="请输入笔记标题" value={useInput} onChange={handleInputChange}/>
        <textarea rows="6" placeholder="请输入笔记内容" value={useContent}  onChange={handleContentChange} ></textarea>
        <button type="submit" onClick={handleAddNote}>添加笔记</button>
      </form>
    </div>
  );
}

export default AddNote;
