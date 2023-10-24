import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'

export default function Authentication() {
    const [user, setUser] = useState('');
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                localStorage.setItem('authUser', JSON.stringify(user));
                setUser(user);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });
    })
  return (
    {user}
  )
}
