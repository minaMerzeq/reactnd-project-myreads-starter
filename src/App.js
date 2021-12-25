import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MyReads from './pages/MyReads';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then(books => this.setState({books}));
  }

  changeShelf = (book, shelf) => {
    const b = this.state.books.find(({id}) => id === book.id);
    if(!b)
      this.setState(prevState => ({books: [...prevState.books, book]}));
    
    BooksAPI.update(book, shelf)
    .then(data => this.setState(prevState => ({books: prevState.books.map(b => {
      if(b.id === book.id){
        b.shelf = shelf;
      }
      return b;
    })})));
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<MyReads books={this.state.books} changeShelf={this.changeShelf} />} />
          <Route path="/search" element={<AddBook changeShelf={this.changeShelf} shelfsBooks={this.state.books} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    )
  }
}

export default BooksApp
