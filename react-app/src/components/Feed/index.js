import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store/posts"
import "./Feed.css";

function Feed() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.allPosts)
    // console.log(posts)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if (posts === undefined || posts === null) return null;

    return (
        <h1>
        {
            // console.log("Values: ", Object.values(posts))
            Object.values(posts).map((post, idx) => (
                // console.log(post)
                <h1>{post.post_text}</h1>
            ))
        }
        </h1>
    )
}

export default Feed
