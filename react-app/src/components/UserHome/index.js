import { useModal } from "../../context/Modal";
import SinglePost from "../SinglePost";
import "./UserHome.css"

function UserHome({ info }) {
    const { closeModal } = useModal();

    const [session, posts] = info;
    const user = session.user;

    const userPosts = Object.values(posts).filter(post => post?.user?.id === user?.id)

    console.log(userPosts[0])

    return (
        <div id="user-page-container">
            <div id="close-user-page-button" onClick={closeModal}>
                x
            </div>
            <div id="user-feed-container">
                <div id="user-profile-container">
                    <div id="user-profile">
                        <div id="user-card">
                            <img src={userPosts[0]?.user?.profile_picture} alt="user profile"></img>
                        </div>
                    </div>
                    <div id="user-feed">
                        {userPosts ? userPosts.map((post, idx) => (
                            <div className="post" key={idx}>
                                <div className="post-details">
                                    <div className="post-user">
                                        <div className="user-username">{post?.user?.username}</div>
                                        <div className={`follow-user-button ${(post.user_id === user?.id) && "hidden"}`}>Follow</div>
                                    </div>
                                    <h2 className="post-title">{post.post_title}</h2>
                                    <img className={post.imageURL !== null ? "post-image" : "hidden"} src={post?.imageURL} alt=''></img>
                                    <div className={post.post_text ? "post-text" : "hidden"}>{post?.post_text}</div>
                                    <SinglePost info={[post, session]} />
                                </div>
                            </div>
                        ))
                            :
                            <div>No posts</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHome
