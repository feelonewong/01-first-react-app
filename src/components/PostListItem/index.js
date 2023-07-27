import React from "react";

function PostListItem(props) {
  const {microBlog} = props
  const blogChildren = {
    display: "flex",
    width: '200px'
  }
  function handleBlogClick(){} 
  return (
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
      <div style={blogChildren}>{props.children}</div>
    </div>
  );
}

export default PostListItem;
