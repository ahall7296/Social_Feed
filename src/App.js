import React, { useState } from 'react';
import PostList from './Components/PostList';
import CreatePostForm from './Components/CreatePostForm';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  var [posts, setPosts] = useState([
    {
   userName: "AJ Hall",
   postBody: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, blanditiis adipisci. Dolorum repellat officia ea sint dolores tenetur, nobis quasi! ",
   timeStamp: new Date().toISOString()
 },
]);
  function addNewPost(post){
    let tempPosts = [post, ...posts]
    setPosts(tempPosts)
  }
  return (
    <div className="App">
      <NavBar/>
      <CreatePostForm addNewPost={addNewPost}/>
      <PostList pagePosts={posts}/>
    </div>
  );
}

export default App;