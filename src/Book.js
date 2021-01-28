import React from 'react'

const Book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert('pos')
  }

  const com = (author) => {
    console.log(author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />

      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        ref
      </button>
      <button type='button' onClick={() => com(author)}>
        ms
      </button>
    </article>
  )
}

export default Book
