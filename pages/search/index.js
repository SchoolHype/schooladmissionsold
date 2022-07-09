import { useRouter } from 'next/router';
import React from 'react'
import { useUserAuth } from '../../context/userAuthContext'

export default function Search() {

  const {user, logout} = useUserAuth();
  const router = useRouter();

  return (
    <>
      <div style={{marginTop:"40px"}}>SEARCH PAGE</div>
      <button
        onClick={() => {
          logout();
          router.push('/login/parents')
        }}>
        Logout
      </button>
    </>
  )
}
