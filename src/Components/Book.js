    import React, { useState, useEffect } from "react"
    import Spinner from "../Spinner/Spinner"
    import Collection from "./Collection"
    import M from "materialize-css"
    import "../App.css"
    
    // so onclick changes the state of the other component in tstmodal
    let currentImage
    const Book = (props) => {
      const [loading, setLoading] = useState(true)
      useEffect(() => {
        setLoading(false)
      })
      // collection is an array of..books saved
      
      let book = (
        <div>
          <a className="book" href={props.link} style={{ cursor: "pointer" }}>
            <div className="coverContainer" style={{backgroundImage: `url(${props.image})`}}>
              <div className='image'></div>
              <div className="bookDescription">{props.info}</div>
            </div>
            <div id="bookInfo">
              <h2 className="bookTitle">{props.title}</h2>
              <h2 className="bookAuthor">{props.author}</h2>
            </div>
          </a>
        </div>
      )
      return (
        <div>{loading ? (<Spinner className="spinner" />) : <div>{ book } <button className="collectionButton" onClick={ props.click }>Save to collection</button> </div>}</div>
      )
    }
    
    export default Book