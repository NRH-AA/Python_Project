import React from "react"
 import {useState, useEffect } from "react";
import {  useDispatch , useSelector} from "react-redux";
import { useModal } from "../../context/Modal";
import * as postsActions from "../../store/posts";
import './createPosts.css';
import { useHistory, useParams} from "react-router-dom";


function CreatePostForm({id}) {

  const dispatch = useDispatch();
//   const posts = useSelector(state=>state.posts.allPosts)
  const user = useSelector(state=>state.session.user)
  const [post_title, setPostTitle] = useState("");
  const [post_heading, setPostHeading] = useState("");
  const [post_text, setPostText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const history = useHistory()
 


const handleSubmit = (e) => {
  e.preventDefault();
  setErrors([]);
    if(!user) return setErrors(["You Must Be Logged in To Create A post"])
   dispatch(postsActions.createPost({post_title, post_text}, user.id))
   .then(closeModal)
  .catch(async (res) => {
    const data = await res.json();
    if (data && data.errors) setErrors(data.errors);
  });

 history.push(`/posts`)
  
}

return (
    <div className="createForm">
        
             
      <h4 className="create-form-text" >{user.username}</h4>
      <form onSubmit={handleSubmit} autoComplete="on">
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label className="create-input-label">
        
          <input className="input"
          placeholder="Title"
            type="text"
            id="PostTitle"
           
            value={post_title}
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />
        </label>
       
        <label className="labels">
      
          <textarea className="create-post-text" placeholder="text"
          maxLength="500"
          cols="20"
            rows="10"
            value={post_text}
            onChange={(e) => setPostText(e.target.value)}
            required>
          </textarea>
        
        </label>
  
          <div className="button">

        <button className='create-form-button' type="submit" >Create Posts</button>
          </div>
      </form>
    </div>
  );
  
}


export default CreatePostForm;