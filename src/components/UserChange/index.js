import { useState } from "react";

function UserChange() {
  const [username, setUsername] = useState("");
  function handleNameChange(e) {
    setUsername(e.target.value);
  }
  const [gender, setGender] = useState("");
  function handleGenderChange(e) {
    setGender(e.target.value);
  }
  const [occupation, setOccupation] = useState("");
  function handleSelect(e) {
    setOccupation(e.target.value);
  }
  const [hobby, setHobby] = useState([]);
  function handleRunChange(e) {
    const { checked, value } = e.target;
    if (checked) {
      setHobby([...hobby, value]);
    } else {
      let newHobby = hobby.filter((item) => item !== value);
      setHobby([...newHobby]);
    }
  }
  return (
    <>
      <h1>第5章：用户注册</h1>
      <form>
        <label htmlFor="username">用户姓名:</label>
        <input type="text" id="username" onChange={handleNameChange}></input>
        <br />
        <label htmlFor="gender">性别:</label>
        <fieldset name="性别">
          <label htmlFor="male">男</label>
          <input
            name="gender"
            type="radio"
            id="male"
            value="male"
            onChange={handleGenderChange}
          />
          <label htmlFor="female">女</label>
          <input
            name="gender"
            type="radio"
            id="female"
            value="female"
            onChange={handleGenderChange}
          />
        </fieldset>
        <label htmlFor="occupation">职业</label>
        <select id="occupation" onChange={handleSelect}>
          <option value="">请选择...</option>
          <option value="前端">前端</option>
          <option value="后端">后端</option>
          <option value="全栈">全栈</option>
        </select>
        <label htmlFor="hobby">兴趣爱好</label>
        <input
          name="hobby"
          type="checkbox"
          value="run"
          onChange={handleRunChange}
        />
        跑步
        <input
          name="hobby"
          type="checkbox"
          value="sing"
          onChange={handleRunChange}
        />
        唱歌
        <input
          name="hobby"
          type="checkbox"
          value="dance"
          onChange={handleRunChange}
        />
        跳舞
      </form>
      <p>用户姓名:{username}</p>
      <p>用户性别:{gender}</p>
      <p>职业:{occupation}</p>
      <p>兴趣爱好:[{hobby.join(" , ")}]</p>
      <hr></hr>
    </>
  );
}

export default UserChange;
