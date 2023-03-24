import { useState } from "react";

const CreatePost = (props) => {
    const [userName,setUserName] = useState ("");
    const [postBody, setPostBody] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        if(userName === "" || postBody === "" ){
            alert("Please enter a username and the body of a post")
            return
          }
        let newPost = {
        userName: userName,
        postBody: postBody,
        timeStamp: new Date().toISOString(),
        }
        props.addNewPost(newPost);
        setUserName("")
        setPostBody("")
    }
    return (
        <div>
    <form onSubmit={handleSubmit}>
    
        <label className='form-label'>Name</label>
        <input type="text" className='form-control' value={userName} onChange={(event) => setUserName(event.target.value)}/>
        <label className='form-label'>Post</label>
        <textarea className='form-control' value={postBody} onChange={(event) => setPostBody(event.target.value)}>placeholder</textarea>
        <button className='btn btn-info' type='submit'>Create</button>
</form>
</div>

    );
}

    export default CreatePost;