import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
import Book from "../components/Book";
import PropTypes from 'prop-types'

export default class AddBook extends Component {
  state= {
    books: [],
  }

  static propTypes = {
    changeShelf: PropTypes.func,
    shelfsBooks: PropTypes.array,
  }
  
  handleSearch = (e) =>{
    if(e.target.value.trim() === ''){
      this.setState({books: []});
      return;
    }

    BooksAPI.search(e.target.value)
    .then(books => {
      this.setState({books});
    });
  }
  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" autoFocus onKeyUp={this.handleSearch}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.length ? this.state.books.map(book => {
              this.props.shelfsBooks.forEach(b => {
                if(b.id === book.id){
                  book.shelf = b.shelf;
                }
              });
              if(book.shelf === undefined)
                book.shelf = "none";
              
              return (<li key={book.id}>
                <Book book={book} changeShelf={this.props.changeShelf} />
              </li>)
            }) : ""}
          </ol>
        </div>
      </div>
    );
  }
}