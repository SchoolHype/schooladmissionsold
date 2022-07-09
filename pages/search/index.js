import React from 'react'

export default function Search() {

  firebase.auth().onAuthStateChanged(function(user) {

    if(user) {
        router.push('/search')
    } else {
       window.location.href = "login.js";
    }
    
    });
  return (
    <div>search page</div>
  )
}
