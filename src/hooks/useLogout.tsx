import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAppDispatch } from '../store/hooks'
import { saveUserAuth } from '../store/slices/authSlice'

export const useLogout = () => {
  const dispatch = useAppDispatch()
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  
  const logout = async () => {
    setError(null)
    setIsPending(true)

    // sign the user out 
    try {
      await projectAuth.signOut()

      // dispatchlogout action
      dispatch(saveUserAuth(null))
      setIsPending(false)
      setError(null)

    } catch (error: any) {
      console.log(error.message)
      setError(error.message)
      setIsPending(false)
    }
  }

  return { logout, error, isPending }

}