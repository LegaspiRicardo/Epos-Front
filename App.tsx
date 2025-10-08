import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  return (
    <>
      <div className='bg-cyan-900 py-5 text-white'>
        <div className='w-11/12 mx-auto'>
          <h1 className='font-bold text-3xl '>EPOS</h1>
          <p className='text-2xl tracking-wider'>Birlos y tornillos para tu auto</p>
        </div>
      </div>

      <div className='border-b-2 solid mt-2'>
        <div className="w-11/12 mx-auto ">
          <p className='font-bold'> Productos de calidad</p>
          <p>Resistentes y al mejor precio.</p>
        </div>
      </div>
    </>
  )
}

export default App
