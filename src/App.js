import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends Component {
  state = {
    allBooks: []
  }

  // gets all the books
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books })
    })
  }

  //is called when a shelf of the book is changed
  updateShelf = (book, shelf) => {
    // this.setState((state) => ({
    //   allBooks: state.allBooks.map( thisBook => {
    //     if(thisBook.title === book.title) {
    //       thisBook.shelf = shelf
    //       return thisBook
    //     } else {
    //       return thisBook
    //     }
    //   })
    // }))
    BooksAPI.update(book, shelf).then(updated => (
      BooksAPI.getAll().then((books) => {
        this.setState({ allBooks: books })
      })
    ))
  }

  render() {
    return(
      <div className="app">
        <ListBooks
          books={this.state.allBooks}
          updateOption={(book, shelf) => this.updateShelf(book, shelf)}
        />
      </div>
    )
  }
}

export default BooksApp
