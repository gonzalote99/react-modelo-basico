import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>ooo</h2>
const Message = () => {
  return <p>fdf</p>
}

ReactDom.render(<Greeting />, document.getElementById('root'))
