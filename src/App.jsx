import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux'
import { getCurrentUser } from "./firebase/auth"
import { login,logout } from "./store/authSllice"


function App() {
const [loading,setLoading] = useState(true)
const dispatch = useDispatch()


useEffect(() => {
  getCurrentUser()
  .then(
    (user) => {
      if(user){
        dispatch(login({data}))
      }
      else 
      dispatch(logout())
    }
  )
  .finally(()=>
    setLoading(false)
  )
}, [])

  return !loading ? (
    <div>Hello Bhai</div>
  ) : <h1>Loading</h1>
}

export default App
