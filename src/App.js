import "./App.css";
import "./index.css";
import Count from "./pages/03Status/index";
import UserImage1 from "./aeests/images/user1.png";
import UserImage2 from "./aeests/images/user2.png";
import UserImage3 from "./aeests/images/user3.png";
import PostListItem from "./components/PostListItem";
import UserChange from "./components/UserChange"
import Effect06 from './pages/06Effect/index'
import Fragement07 from './pages/07JSX/index'
import Nav from './pages/07JSX/childItem'
import ParentValue from './pages/08ParenetValue/index'
import ParentJSXChild from './pages/08ParenetValue/nav'
import CompValue from './pages/08ParenetValue/compValue'
import { useState } from "react";
function App() {
  const [microBlogs, setMicroBlogs] = useState([
    {
      id: 1,
      author: {
        name: "张三",
        avatar: UserImage1,
      },
      content: "这是我的第1条微博",
      publishDate: "2023-01-01",
    },
    {
      id: 2,
      author: {
        name: "李四",
        avatar:
          "https://ahrefs.com/blog/wp-content/uploads/2020/12/1-comic-password-strength.png",
      },
      content: "这是我的第2条微博",
      publishDate: "2023-01-02",
    },
    {
      id: 3,
      author: {
        name: "王五",
        avatar: UserImage3,
      },
      content: "这是我的第3条微博",
      publishDate: "2023-01-02",
    },
    {
      id: 4,
      author: {
        name: "王五",
        avatar: UserImage2,
      },
      content: "这是我的第4条微博",
      publishDate: "2023-01-02",
    },
  ]);
  const [text, setText] = useState('修改之前的值')
  const titleStyle = {
    fontSize: "20px",
    color: "red",
    fontWeight: "bold",
  };
  const [microBlog, setMicroBlog] = useState("");
  function handleOnInput(e) {
    setMicroBlog(e.target.value);
  }
  function handlePublish() {
    const newMicroBlog = {
      id: microBlogs.length + 1,
      author: {
        name: "随机名称",
        avatar: UserImage1,
      },
      content: microBlog,
      publishDate: `${new Date().getFullYear()}-0${
        new Date().getMonth() + 1
      }-${new Date().getDay()}`,
    };
    setMicroBlogs([...microBlogs, newMicroBlog]);
    setMicroBlog("");
  }
  function handleEdit(e, ...args) {
    e.preventDefault();
    console.log("args", ...args);
  }
  function handleChangeText(){
    setText("修改以后得值")
  }
  return (
    <main className="container">
      {/* 第8章开始 */}
      <CompValue></CompValue>
      <ParentJSXChild></ParentJSXChild>
      <ParentValue onInputChange={handleChangeText} text={text}></ParentValue>
      {/* 第8章结束 */}
      {/* 第7章 开始 */}
      <Fragement07></Fragement07>
      <Nav>
        <Nav.Item>首页</Nav.Item> <br/>
        <Nav.Item>我的</Nav.Item> <br/>
        <Nav.Item>关于</Nav.Item> <br/>
      </Nav>
      {/* 第7章 结束 */}
      {/* 第6章 开始 */}
      <Effect06></Effect06>
      {/* 第5章开始 */}
      <UserChange></UserChange>
      {/* 第5章结束 */}
      <Count></Count>
      <hr></hr>
      <h1 style={titleStyle}>欢迎使用本应用</h1>
      <div className="publishBlog">
        <textarea
          onInput={handleOnInput}
          value={microBlog}
          cols={30}
          rows={5}
          placeholder="请输入..."
        ></textarea>
        <button onClick={handlePublish}>发布</button>
      </div>
      <div className="postList">
        {microBlogs.map((microBlog) => (
          <PostListItem microBlog={microBlog} key={microBlog.id}>
            <UpdateButton handleEdit={handleEdit}></UpdateButton>
          </PostListItem>
        ))}
      </div>
    </main>
  );
}

function UpdateButton(props) {
  function handleChildEdit(e) {
    props.handleEdit(e, "传递参数1", 2);
  }
  return (
    <>
      <a href="http" className="button edit" onClick={handleChildEdit}>
        编辑
      </a>
      <a href="http" className="button">
        删除
      </a>
    </>
  );
}
export default App;
