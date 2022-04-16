import React from "react";
import { useEffect, useState } from "react";
import Book from "./Book";
import TestModal from './TestModal'
import 'semantic-ui-css/semantic.min.css'
import M from 'materialize-css'
import Header from "./Header"
import Spinner from '../Spinner/Spinner'
import logo from '../logo.svg'
import "../App.css";

// parent component
// seed & cart implementation
// so using the search component
// just need a way to get the input value
const API_KEY = "AIzaSyBFGdkpTlaCrmtFpXqBH0RRHQXrUMudYcE";

const Books = () => {
  const [books, setBooks] = useState([])

  // where's the input coming in..? searchVal
  // trying to get the input
  const [collection, setCollection] = useState([])

  const addBook = book => {
    M.toast({html: 'Added to collection!'})
    let temp=collection
    temp.push(book)
    setCollection(temp)
    console.log(collection)
  }

  let search = (searchVal) => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        searchVal
        )}&key=${API_KEY}`
        )
        .then((res) => res.json())
        .then((jsonRes) => {
          setBooks(jsonRes.items)
          document.getElementById('app-description').innerHTML='Click on book covers to be redirected to the corresponding google page.'
      })
  }

  return (
    <div>
      <Header search={search} />
      <TestModal data={collection} className='testModal'/>
      <div className="books">
        {
           books.map((book, index) => (
             <Book
               key={`${index}-${book.volumeInfo.title}`}
               title={book.volumeInfo.title}
               image={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : logo}
               author={book.volumeInfo.authors}
               link={book.volumeInfo.infoLink}
               info={book.searchInfo.textSnippet}
               click = { () => addBook(book)}
             />
             )   
        )}
      </div>
    </div>
  )
}

export default Books;

/*
need to pass the data from: books > testmodal > collection via props
*/