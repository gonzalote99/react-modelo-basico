import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}

const author = 'fff'
const Book = () => {
  const title = 'op'
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/71L18q2vqCL._AC_UL160_SR111,160_.jpg'
        alt=''
      />

      <h1>{title}</h1>
      <h4>{author.toLocaleUpperCase()}</h4>
      <p>{2 + 2}</p>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
