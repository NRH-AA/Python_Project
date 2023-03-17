import React from "react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import * as postsActions from "../../store/posts";
import '../CreatePosts/createPosts.css'
import { useHistory } from "react-router-dom";


function UpdatePostForm({ type, post }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [post_title, setPostTitle] = useState(post.post_title || "");
  const [post_text, setPostText] = useState(post.post_text || "");
  const [isImagePost, setIsImagePost] = useState(type);
  const [image, setImage] = useState(post.imageURL || "");
  const [imageLoading, setImageLoading] = useState(false);
  const [imageURL, setImageURL] = useState(post.imageURL || "")
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors([]);
    if (!user) return setErrors(["You Must Be Logged in To Edit A post"]);

    if (!post_title && !post_text && !imageURL) return setErrors(["You must have a title, text or image."]);
    if (post_title === post.post_title
        && post_text === post.post_text
        && !image) return setErrors(["No updates were detected."]);

    const postDetails = {
        post_title: post_title ? post_title : null,
        post_text: post_text ? post_text : null
    }

    console.log(postDetails)

    if (image) postDetails.imageURL = imageURL

    dispatch(postsActions.updatePost(post.id, postDetails))
      .then(closeModal)
      .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
            history.push(`/posts`);
      });
  };

  const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

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
    handleImageUpload(file);
  }

  const showImageUpload = () => {
    return (
      <div id="upload-image-container">
        <input
          id="upload-img-input"
          type="file"
          accept="image/*"
          onChange={updateImage}
        />
      </div>
    )
  }

  const removeImage = () => {
    setImage("")
    setImageURL("")
  }

  const showImage = () => {
    if (imageURL) {
      return (
        <>
          <img id="show-img" src={imageURL} />
          <i id="remove-image-button" className="fa-solid fa-x" onClick={removeImage} />
        </>
      )
    }
  }

  return (
    <div id="createForm">

      <img id="create-post-profile-picture" src={user.profile_picture} alt="user profile"></img>
      <p className="create-form-text" >{user.username.toUpperCase()}</p>

      <form onSubmit={handleSubmit}>
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

        {isImagePost === "photo" && image === "" ? showImageUpload() : ""}
        {(imageLoading && <p id="loading-text">Loading...</p>)}
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
            className='create-form-cancel-button'
            type="button"
            onClick={() => closeModal()}
          >
          Close</button>
          <button
            className='create-form-submit-button'
            type="submit"
            disabled={imageLoading || (!post_text && !post_title && !imageURL)}
          >Save</button>
        </div>

      </form>
    </div>
  );
};


export default UpdatePostForm;
