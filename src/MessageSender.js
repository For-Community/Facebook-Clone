import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import React, { useState } from 'react'
import "./MessageSender.css"
import { useStateValue } from './StateProvider'
import db from "./firebase"
import firebase from "firebase"

function MessageSender() {

    const [ { user }, dispatch ] = useStateValue()
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')


   const handleSubmit = Refresh => {
    Refresh.preventDefault()

    // firestore works
    db.collection("posts").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
      });

    setInput("")
    setImageUrl("")
   }

    return (
        <div className="message-sender">
            <div className="top">
            <Avatar src={user.photoURL} />
            <form>
                <input value={input} onChange={(send) => setInput(send.target.value)} className="message-input" placeholder={`What's on your mind, ${user.displayName}?`}/>
                 <input value={imageUrl} onChange={(se) => setImageUrl(se.target.value)} type="text" placeholder="image URL (OPTIONAL)" />
                 <button onClick={handleSubmit} type="submit">Hidden submit</button>
            </form>
            </div>
            <div className="botttom">
                <div className="message-options">
                    <Videocam style={{color: "red"}} />
                    <h3>Live Video</h3>
                    </div>
                    <div className="message-options">
                    <PhotoLibrary style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                    </div>
                    <div className="message-options">
                    <InsertEmoticon style={{color: "yellow"}} />
                    <h3>Feeling/Activity</h3>
                    </div>
            </div> 
        </div>
    )
}

export default MessageSender
