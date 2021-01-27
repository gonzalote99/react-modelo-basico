import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/71L18q2vqCL._AC_UL160_SR111,160_.jpg',
  title: 'op',
  author: 'fff',
}

const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/61OVIMnBy-L._AC_UL160_SR111,160_.jpg',
  title: 'ophgg',
  author: 'ffsff',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
          repudiandae sapiente explicabo cum odio. Error alias cum porro quidem
          iusto.
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, children } = props
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt='' />

      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
