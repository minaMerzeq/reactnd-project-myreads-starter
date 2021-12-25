import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func,
    }

    handleChange = (e) => {
        const {book, changeShelf} = this.props;
        changeShelf(book, e.target.value);
    }

    render() {
        const {book} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select defaultValue={book.shelf} onChange={this.handleChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.map((author, id) => (<span key={id}>{author}<br /></span>))}</div>
            </div>
        )
    }
}