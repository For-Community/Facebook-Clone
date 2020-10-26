import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth, provider } from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {

    const [{}, dispatch] = useStateValue()

    const signIn = () => {
     auth.signInWithPopup(provider)
     .then(result => {

        dispatch({
            type:actionTypes.SET_USER,
            user:result.user,
        })
         console.log(result)
     }).catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="logo">
            <img src="https://media.giphy.com/avatars/facebook/eTby7BmGFumb.png" alt=""/>
            <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/11/e8d53e91-3831-4429-8ba7-b5c290a5ba98-5dc0b9c0642a3.gif" alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>

        </div>
    )
}

export default Login
