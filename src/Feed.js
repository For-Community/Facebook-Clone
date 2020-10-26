import React, { useEffect, useState } from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import db from "./firebase"
import FlipMove from "react-flip-move"

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      db.collection("posts")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);
  
    return (
        <div className="feed">
            {/* Story */}
            <StoryReel />
            {/* message */}
            <MessageSender />
            {/* post */}
            <FlipMove>
            {posts.map(post => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
            </FlipMove>
      </div>
    )
}

export default Feed
