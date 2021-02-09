import React, { useState } from 'react'

const Error = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [text, setText] = useState('random title')
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world')
    } else {
      setText('random title')
      setText('PL')
    }
    if (text === 'PL') {
      setText('o')
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default Error
