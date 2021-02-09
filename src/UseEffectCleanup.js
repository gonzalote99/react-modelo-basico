import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  //console.log(size)
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log('useEffect')
    window.addEventListener('resize', checkSize) //->elements->event listeners->resise
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    } // sin return() hasta (checksise) solo muestra consola render(veces)
  }, []) //> sin ,[] en consola muestra 'useEfect' y 'cleaunup'
  console.log('render')
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  )
}

export default UseEffectCleanup
