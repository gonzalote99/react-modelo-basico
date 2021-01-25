import React from 'react'
import ReactDom from 'react-dom'

function Greeting() {
  return (
    <div>
      <h4>gg</h4>
    </div>
  )
}

//const Greeting = () => {
//return React.createElement('h2', {}, 'gg')
//}

ReactDom.render(<Greeting />, document.getElementById('root'))
