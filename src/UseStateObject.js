import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  })
  //console.log(person)
  // const [name,setName] = useState('peter')
  // const [age,setAge] = useState(24)
  // const [message,setMessage] = useState('random message')

  const changeMessage = () => {
    setPerson({ ...person, message: 'hello world' })
    // setMessage('hello world')
  }

  const cha = () => {
    setPerson({ ...person, age: 3 })
  }
  // <h3>{name}</h3>
  // <h3>{age}</h3>
  // <h4>{message}</h4>
  return (
    <>
      <h3>{person.name}</h3>

      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
      <button className='btn' onClick={cha}>
        cha ag
      </button>
    </>
  )
}

export default UseStateObject
