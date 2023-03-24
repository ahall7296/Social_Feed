import React from "react";
import Post from "./Post";

const PostList = ({pagePosts}) => {


    return(  
    <div>
        <table>
        <thead>
            <tr>
                <th className='name'>Name</th>
                <th className='post'>Post</th>
            </tr>
        </thead>
        <tbody>
        {pagePosts.map((e, i)=>{
            console.log(e.timeStamp)
            return (
                <Post key={i} userName={e.userName} postBody={e.postBody} timeStamp={e.timeStamp} index={i}/>
            );
        })}
        </tbody>
        </table>

    </div>
);
}



export default PostList;