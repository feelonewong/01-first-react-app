import "./App.css";
import "./index.css";
import UserImage1 from "./aeests/images/user1.png";
import UserImage2 from "./aeests/images/user2.png";
import UserImage3 from "./aeests/images/user3.png";
import PostListItem from "./components/PostListItem";
function App() {
  const microBlogs = [
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
  ];
  const titleStyle = {
    fontSize: "20px",
    color: "red",
    fontWeight: "bold",
  };
  function handleOnInput(e) {
    console.log("e.target.value:", e.target.value);
  }
  function handleEdit(e, ...args){
    e.preventDefault();
    console.log('args', ...args)
  }
  return (
    <main className="container">
      <h1 style={titleStyle}>欢迎使用本应用</h1>
      <div className="publishBlog">
        <textarea
          onInput={handleOnInput}
          cols={30}
          rows={5}
          placeholder="请输入..."
        ></textarea>
        <button>发布</button>
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

function UpdateButton (props){
  function handleChildEdit(e){
    props.handleEdit(e,'传递参数1', 2)
  }
  return (
    <>
     <a href="http" className="button edit" onClick={handleChildEdit}>编辑</a>
     <a href="http" className="button">删除</a>
    </>
  )
}
export default App;
