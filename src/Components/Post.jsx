import React,{useState} from 'react';

const Post = (props) => {
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const handleLike = () => {
      if (disliked) {
        setDisliked(false);
      }
      setLiked(!liked);
    };
  
    const handleDislike = () => {
      if (liked) {
        setLiked(false);
      }
      setDisliked(!disliked);
    };
    return ( 
        
        <tr key={`entry-row-${props.index}`}>
        <td className='nameTitle'>{props.userName}</td>
        <td className='nameTitle'>{props.postBody}</td>
        <td className='nameTitle'>{props.timeStamp}</td>
        <td><button
          className={`btn btn-primary mr-2 ${liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          <i className={`fa${liked ? 's' : 'r'} fa-thumbs-up`} aria-hidden="true"></i>
          {liked ? "Liked" : "Like"}
        </button><button
          className={`btn btn-danger ${disliked ? "disliked" : ""}`}
          onClick={handleDislike}
        >
          <i className={`fa${disliked ? 's' : 'r'} fa-thumbs-down`} aria-hidden="true"></i>
          {disliked ? "Disliked" : "Dislike"}
        </button></td>
    </tr>
     );
}
 
export default Post;