import React from 'react'
import logo from '../logo.svg'
import '../App.css'

const Collection = props => {
  let collection = props.data
  // data is pulled from book
  console.log(props.data)
    return (
        <div className="collection">
        {
          collection.map((book) => (
             <div className='book'>
            <div className="coverContainer">
              <img src={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : logo} className="collectionImage" />
              <div className="bookDescription">{book.volumeInfo.info}</div>
            </div>
            <div id="bookInfo">
              <h2 className="bookTitle">{book.volumeInfo.title}</h2>
              <h2 className="bookAuthor">{book.volumeInfo.authors}</h2>
            </div>
      </div>
             ))
        }
    </div>
    )
}

export default Collection