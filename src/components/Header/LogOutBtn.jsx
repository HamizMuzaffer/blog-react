import React from 'react'
import { useDispatch } from 'react-redux'
import { userLogOut } from '../../firebase/auth'
import { logout } from '../../store/authSllice'
function LogOutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        userLogOut().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogOutBtn