import React, { useEffect } from 'react'
import { useSocket } from '../providers/Socket'

function Room() {
    const {socket} = useSocket();

    const handleNewUserJoined = (data) => {
        const {emailId} = data;
        console.log("new user joined",emailId);
    }
    useEffect(()=>{
        socket.on('user-joined', handleNewUserJoined)
    },[socket])
  return (
    <div className='room-page-container'>
        <h1>Room page</h1>
    </div>
  )
}

export default Room