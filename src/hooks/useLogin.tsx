import { useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAppDispatch } from '../store/hooks'
import { saveUserAuth } from '../store/slices/authSlice'

export const useLogin = () => {
    const dispatch = useAppDispatch()
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const login = async (email: string, password: string) => {
        setError(null)
        setIsPending(true)

        // log user in
        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password)
            dispatch(saveUserAuth(res.user))

            setIsPending(false)
            setError(null)
        } catch (error: any) {
            console.log(error.message)
            setError(error.message)
            setIsPending(false)
        }
    } 
    
    return { login, error, isPending }
}