import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71L18q2vqCL._AC_UL160_SR111,160_.jpg',
    title: 'op',
    author: 'fff',
  },
  {
    id: 2,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/61OVIMnBy-L._AC_UL160_SR111,160_.jpg',
    title: 'ophgg',
    author: 'ffsff',
  },
  {
    id: 3,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/7196WwHcD4L._AC_UL160_SR107,160_.jpg',
    title: 'oawe',
    author: 'fccff',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  console.log(props)

  const { img, title, author } = props.book

  return (
    <article className='book'>
      <img src={img} alt='' />

      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
