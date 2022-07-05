import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAppDispatch } from '../store/hooks'
import { saveUserAuth } from '../store/slices/authSlice'

export const useRegister = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>(null)
  const [isPending, setIsPending] = useState<boolean>(false)

  const register = async (email: string, password: string, displayName: string) => {
    setError(null)
    setIsPending(true)

    try {
      // register user
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      dispatch(saveUserAuth(res.user))

      if(!res) {
        throw new Error("Could not complete Registration")
      }
      // add display name to user
      await res.user?.updateProfile({displayName: displayName})
      setIsPending(false)
      setError(null)

    } catch (err: any) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { error, isPending, register }
}