import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


var openWhatsapp=()=>{
 var number  = '7092005804'
 var message = encodeURIComponent("Hello");
 var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + number + '&text=' + message;
 window.open(whatsappUrl, '_black')

  }
  return (
    <>
      <h1>Arriving shortly</h1>
      <button  onClick={openWhatsapp }>Contact</button>
    </>
  )
}

export default App
