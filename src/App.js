import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends Component {
  state = {
    allBooks: [],
    filteredBooks: []
  }

  // gets all the books
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ allBooks: books })
    })
  }

  //is called when a shelf of the book is changed
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(updated => (
      BooksAPI.getAll().then((books) => {
        this.setState({ allBooks: books })
      })
    ))
  }

  searchBooks = (query) => {
    console.log(query)
      BooksAPI.search(query).then( (result) => {
        // if (result.items) {
        //   console.log(result)
        //   this.setState({ filteredBooks: [] }, () => console.log(this.state.filteredBooks))
        // }
        // else
        if (result) {
          if (result.error !== 'empty query') {
            this.setState({
              filteredBooks: this.state.allBooks.filter((b) => b.title.indexOf(query) !== -1).concat(result)
            })
          } else {
            this.setState({
              filteredBooks: []
            })
          }
        }
      })
  }

  render() {
    return(
      <div className="app">

        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.allBooks}
            updateOption={(book, shelf) => this.updateShelf(book, shelf)}
          />
        )}/>

        <Route path="/search" render={() => (
          <div >
            <SearchBooks
              filteredBooks={this.state.filteredBooks}
              searchBooks={(query) => this.searchBooks(query)}
              updateOption={(book, shelf) => this.updateShelf(book, shelf)}
            />
          </div>
        )}/>

      </div>
    )
  }
}

export default BooksApp
