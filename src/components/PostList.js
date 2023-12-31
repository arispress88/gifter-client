import React, { useContext, useEffect } from "react";
import { PostContext } from "../APIManagers/PostManager";
import Post from "./Post";



const PostList = () => {
  const { posts, getAllPostsWithComments } = useContext(PostContext);

    useEffect(() => {
    getAllPostsWithComments();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;