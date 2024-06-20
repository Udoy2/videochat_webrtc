import React, { useEffect, useState } from 'react'
import './Home.css'
import { useSocket } from '../components/Socket'
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const {socket} = useSocket();
  const [emailId,setEmailId] = useState("");
  const [roomId,setroomId] = useState("");
  const handleSocket = () => {
    socket.emit('join-room',{roomId:roomId,emailId:emailId});
  }
  const handleJoinRoom = (data) => {
    navigate(`/room/${data.roomId}`);
  }
  useEffect(()=>{
    socket.on('joined-room',handleJoinRoom)
  },[])
  return (
    <div className='homepage-container'>
        <div className='form-container'>
            
            <input className='input' value={emailId} onChange={(e)=>setEmailId(e.target.value)} type="email" placeholder="enter your email here" />
            <input className='input' value={roomId} onChange={(e)=>setroomId(e.target.value)} type="text" placeholder="enter your room code" />
            <button className='button' onClick={handleSocket}>Join Room</button>
        </div>
    </div>
  )
}

export default Home