import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BooksShelf from "../components/BooksShelf";

export const shelfs = [
    "Currently Reading",
    "Want to Read",
    "Read",
]

const MyReads = (props) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  {shelfs.map((shelf, index) => (
                    <BooksShelf key={index} books={props.books} shelf={shelf} changeShelf={props.changeShelf} />
                  ))}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
        </div>
    );
}

MyReads.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func
}

export default MyReads;