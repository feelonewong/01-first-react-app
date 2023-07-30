import { useState } from "react";

function UserChange() {
  const initUser = {
    username: "",
    gender: "",
    occupation: "",
    hobby: [],
  };
  const [user, setUser] = useState(initUser);

  function handleInputChange(e) {
    let { type, name, value, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        value = [...user.hobby, value];
      } else {
        value = user.hobby.filter((item) => item !== value);
      }
    }
    setUser({
      ...user,
      [name]: value,
    });
  }
  function handleReset() {
    setUser(initUser);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }
  return (
    <>
      <h1>第5章：用户注册</h1>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <label htmlFor="username">用户姓名:</label>
        <input
          name="username"
          type="text"
          id="username"
          onChange={handleInputChange}
        ></input>
        <br />
        <label htmlFor="gender">性别:</label>
        <fieldset name="性别">
          <label htmlFor="male">男</label>
          <input
            name="gender"
            type="radio"
            id="male"
            value="male"
            onChange={handleInputChange}
          />
          <label htmlFor="female">女</label>
          <input
            name="gender"
            type="radio"
            id="female"
            value="female"
            onChange={handleInputChange}
          />
        </fieldset>
        <label htmlFor="occupation">职业</label>
        <select id="occupation" name="occupation" onChange={handleInputChange}>
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
          onChange={handleInputChange}
        />
        跑步
        <input
          name="hobby"
          type="checkbox"
          value="sing"
          onChange={handleInputChange}
        />
        唱歌
        <input
          name="hobby"
          type="checkbox"
          value="dance"
          onChange={handleInputChange}
        />
        跳舞
        <div>
          <button type="submit">提交</button>
          <button type="reset">重置</button>
        </div>
      </form>
      <p>用户姓名:{user.username}</p>
      <p>用户性别:{user.gender}</p>
      <p>职业:{user.occupation}</p>
      <p>兴趣爱好:[{user.hobby.join(" , ")}]</p>
      <hr></hr>
    </>
  );
}

export default UserChange;
