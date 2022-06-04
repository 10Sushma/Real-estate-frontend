import { positions } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div  style={{position:'relative'}}>
        <img style={{width:'100vw',height:'100vh'}} src='not-found.jpeg' alt='404 not found'  />
        <Link to='/'>
        <button style={{width: '12vw',
        border:'2px solid ',
    height: '7vh',
    left: '43vw',
    top: '64vh',
    p: '58vh',
    backgroundColor: 'gray',
    color: 'black',
    position: 'absolute'}}>Home</button></Link>
    </div>
  )
}

export default NotFound