import React from 'react';

const Post = (props) => {

    return ( 
        <div>
            <hr/>
            <strong>{props.userName}</strong>
            <p>{props.postBody}</p>
            <LikeDislike />
            <PostDate date={props.timestamp}/>
        </div>
     );
}
 
export default Post;