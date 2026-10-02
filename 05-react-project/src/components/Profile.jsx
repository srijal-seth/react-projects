import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)


    if(!user){
        return <h2>Login to Account</h2>
    } 
    
    return <h2>Login Successful <br /> {user.username}</h2>


}

export default Profile