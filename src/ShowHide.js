import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth) //> para ajustar valor de la pantalla
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize) //>para ocultarlo
    }
  }, [])

  return (
    <div style={{ marginTop: '2rem', color: 'red' }}>
      <h1>Window</h1>
      <h2>size : {size}</h2>
    </div>
  )
}

export default ShowHide
