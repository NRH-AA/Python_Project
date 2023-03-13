import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/posts"
import "./Feed.css";

function Feed() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.allPosts)

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    if (posts === undefined || posts === null || Object.keys(posts).length === 0) return null;

    return (
        <div id='feed'>
            {Object.values(posts).map((post, idx) =>
                <div className="post" key={idx}>
                    <div className="post-title">{post.post_title}</div>
                    <div className="post-heading">{post.post_heading}</div>
                    <div className="post-text">{post.post_text}</div>
                    {post.imageURL !== null ?
                        <img className="post-image" src={post.imageURL} alt=''></img>
                        :
                        <div className="hidden"></div>}
                </div>
            )}
        </div>
    )
}

export default Feed
