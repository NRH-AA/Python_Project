import React from "react"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import * as postsActions from "../../store/posts";
import './createPosts.css';
import { useHistory, useParams } from "react-router-dom";


function CreatePostForm({ type }) {
  const dispatch = useDispatch();
  //   const posts = useSelector(state=>state.posts.allPosts)
  const user = useSelector(state => state.session.user)
  const [post_title, setPostTitle] = useState("");
  const [post_text, setPostText] = useState("");
  const [isImagePost, setIsImagePost] = useState(type);
  const [image, setImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [imageURL, setImageURL] = useState('')

  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const history = useHistory()
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);
    if (!user) return setErrors(["You Must Be Logged in To Create A post"]);
      
    if (!post_title && !post_text && !imageURL) return setErrors(["You must have a title, text or image."]);
    
    dispatch(postsActions.createPost({ post_title, imageURL, post_text }, user.id))
      .then(closeModal)
      .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
            history.push(`/posts`);
      });
  };
  
  const handleImageUpload = async () => {
      const formData = new FormData();
      formData.append("image", image);
      
      setImageLoading(true);
      const res = await fetch('/api/users/upload', {
          method: "POST",
          body: formData,
      });
      
      if (res.ok) {
        const data = await res.json();
        const imageUrl = data.url
        console.log("ImageURL", imageUrl)
        
        if (!imageUrl) return setErrors(["Failed to upload image. Please try again."])
        setImageURL(imageUrl)
        setImageLoading(false);
      }
  }
  
  const updateImage = (e) => {
      const file = e.target.files[0];
      setImage(file);
  }
  
  const showImageUpload = () => {
    return <div>
      {(imageLoading) && <p>Loading...</p>}
      <input
        id="upload-img-input"
        type="file"
        accept="image/*"
        onChange={updateImage}
      />
      <button
      onClick={() => handleImageUpload()}
        id="create-post-img-button"
        type="button"
        disabled={!image && true}
        >Upload</button>
      </div>
  }
  
  const showImage = () => {
    if (imageURL) return <img id="show-img" src={imageURL}/>
  }

  return (
    <div id="createForm">
      
      <img id="create-post-profile-picture" src={user.profile_picture} alt="user profile"></img>
      <p className="create-form-text" >{user.username.toUpperCase()}</p>
      
      <form onSubmit={handleSubmit} autoComplete="on">
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
          />
        </label>
        
        {isImagePost === "photo" ? showImageUpload() : ""}
        {showImage()}
        
        <label className="labels">
          <textarea className="create-post-text" 
            placeholder="What would you like to say?"
            maxLength="250"
            cols="20"
            rows="10"
            value={post_text}
            onChange={(e) => setPostText(e.target.value)}
          />
        </label>

        <div className="create-post-button-div">
          <button
            className='create-form-button'
            type="button"
            onClick={() => closeModal()}
          >
          Cancel</button>
          <button 
            className='create-form-button' 
            type="submit" 
            disabled={imageLoading && true}
          >Create Posts</button>
        </div>
        
      </form>
    </div>
  );
};


export default CreatePostForm;
