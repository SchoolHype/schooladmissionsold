import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useUserAuth } from '../context/userAuthContext'

export const ProtectedRoutes = ({ children }) => {

    const {user} = useUserAuth();
    const router = useRouter();

    useEffect(() => {
      if(!user) {
        router.push('/login/parents')
      }

    }, [router, user])
    
  return ( 
    <>
        { user ? children : null}
    </>
  )
}
