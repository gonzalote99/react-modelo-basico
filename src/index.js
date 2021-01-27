import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const author = 'fff'
const title = 'op'
const img =
  'https://images-na.ssl-images-amazon.com/images/I/71L18q2vqCL._AC_UL160_SR111,160_.jpg'

function BookList() {
  return (
    <section className='booklist'>
      <Book tr='car' />
      <Book ot='sl' num={3} />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={img} alt='' />

      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.tr}</p>
      <p>{props.ot}</p>
      <p>{props.num}</p>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
