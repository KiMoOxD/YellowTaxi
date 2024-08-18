import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Predict() {
  let { currentUser } = useAuth()
  let navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigate('/signin')
      return;
    }
  })
  
  return (
    <div>
      predict
    </div>
  )
}
