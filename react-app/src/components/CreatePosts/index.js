import React from "react"
 import {useState, useEffect } from "react";
import {  useDispatch , useSelector} from "react-redux";
import { useModal } from "../../context/Modal";
import * as postsActions from "../../store/posts";
import './createPosts.css';
import { useHistory, useParams} from "react-router-dom";


function CreatePostForm() {

  const dispatch = useDispatch();
  const posts = useSelector(state=>state.posts.allPosts)
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
   dispatch(postsActions.createPosts({post_title, post_heading, post_text, imageUrl}))
  .then(closeModal)
  .then(()=>dispatch(postsActions.getPosts()))
  .catch(async (res) => {
    const data = await res.json();
    if (data && data.errors) setErrors(data.errors);
  });

 history.push(`/posts/${id}`)
  
}

return (
    <div className="createForm">
        <i id='backtrack-button' className="fa-solid fa-arrow-left" onClick={backtrack} />
                <div id='sign-up-modal-container'></div>
      <h1 className="create-form-text" >Create Post</h1>
      <form onSubmit={handleSubmit} autocomplete="on">
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label className="create-input-label">
        
          <input className="input"
          placeholder="Post Title"
            type="text"
            id="PostTitle"
           
            value={post_title}
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />
        </label>
        <label className="labels">
      
          <input className="input"
          placeholder="Heading"
            type="text"
            value={post_heading}
            onChange={(e) => setPostHeading(e.target.value)}
            required
          />
        </label>
        <label className="labels">
      
          <input className="input"
          placeholder="text"
            type="text"
            value={post_text}
            onChange={(e) => setPostText(e.target.value)}
            required
          />
        </label>
        <label className="labels">
      
          <input className="input"
          placeholder="Image Url"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </label>
        <label className="labels">
      
      
     
       
          </label>
    
          
        <button className='create-form-button' type="submit" >Create Posts</button>
      </form>
    </div>
  );
  
}


export default CreatePostForm;