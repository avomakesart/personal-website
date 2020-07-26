import React from 'react'
import AppRouter from './routers/AppRouter'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function PersonalWeb() {
  return (
    <>
      <AppRouter />
      <ToastContainer />
    </>
  )
}
