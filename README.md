# MyReads Project

A web app that consists of two main pages:

- Home Page: that helps you origanize your books and categorize them to belong to one of 3 shelfs: Currently Reading, Want To Read and Read.
- Search Page: which you can navigate to using the "add button" from "Home Page" and that allow you to search and add brand new book to your reads collection.

Have a nice reading experience...

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains the routes to render depending on url.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── components # Helpful components for your app.
    │   ├── BooksShelf.js # used for displaying specific shelf with the books on it.
    │   └── Books.js # used for displaying specific book.
    ├── pages # Helpful components for your app.
    │   ├── AddBook.js # used for displaying the search page and handle search functionality.
    │   └── MyReads.js # used for displaying all shelfs with their books.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
