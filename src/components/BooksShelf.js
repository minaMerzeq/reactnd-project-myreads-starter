import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book';

export default class BooksShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.string.isRequired,
        changeShelf: PropTypes.func,
    }

    render() {
        const {books, shelf, changeShelf} = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.filter(book => book.shelf.toLowerCase() === shelf.toLowerCase().replaceAll(" ", "")).map(book => (
                        <li key={book.id}>
                            <Book book={book} changeShelf={changeShelf} />
                        </li>
                    ))}
                </ol>
                </div>
            </div>
        )
    }
}
