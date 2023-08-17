import React, { useEffect, useState } from 'react'
import logo from '../assets/Logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import MobileNav from './MobileNav'
import { List } from 'phosphor-react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

const Nav = () => {
  
 const [open,setOpen] = useState(false)
 const [ currentUser , setCurrentUser] = useState({})
 useEffect(()=>{
const  unSub = onAuthStateChanged(auth, (user)=>{
  setCurrentUser(user)
  return ()=> unSub()
  
})
 }, [])
 const navigate = useNavigate();
 async function handleLogout() {
 await signOut(auth)
 navigate("/")
 } 

  return (
<div className='nav'>
<img src={logo} alt="Gym-center-logo" />

<div className='nav-link'>
    <ul>
        <li>Home</li>
        <li>Program</li>
        <li>Pricing</li>
        <li>Community</li>
    </ul>

    <div className='btn-container'>
      { currentUser ? ( <button className='signup-btn' onClick={handleLogout}>signout</button> ): <>  <Link to={'/login'}>
        <button className='login-btn'>Login</button></Link>  
      <Link to={'/signup'}>  <button className='signup-btn'>Sign up</button></Link>
   </>  
}

     
    </div>
</div>

<List onClick={ () =>setOpen (!open)} className='open-nav' color='white'/>
{
 open && <MobileNav open={open} setOpen={setOpen} currentUser={currentUser} handleLogout={handleLogout}/> 
}
    </div>
  )

}

export default Nav