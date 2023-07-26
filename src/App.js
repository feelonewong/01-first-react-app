import "./App.css";
import "./index.css";
import UserImage1 from "./aeests/images/user1.png";
import UserImage2 from "./aeests/images/user2.png";
import UserImage3 from "./aeests/images/user3.png";
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
  function handleBlogClick(e, item) {
    console.log(e, item);
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
          <div
            className="post"
            key={microBlog.id}
            onClick={(e) => handleBlogClick(e, microBlog)}
          >
            <img src={microBlog.author.avatar} width={50} alt="" />
            <div className="postContainer">
              <p className="postContent">{microBlog.content}</p>
              <div className="postMeta">
                <p className="postAuthor">{microBlog.author.name}</p>
                <p className="postDate">{microBlog.publishDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
