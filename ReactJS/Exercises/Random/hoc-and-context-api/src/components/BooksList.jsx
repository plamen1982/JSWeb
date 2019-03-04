import React, { Component } from 'react';
import BooksService from '../services/books-service';

class BookList extends Component {
    constructor(props) {
        super(props);

        //creating new instanse from the class BooksService();
        this.service = new BooksService();

        this.state = {
            books: [],
            error: '',
        }
    }
    //add all side effects inside componentDidMount, side effect is functionality
    // that is not releted to rendering, more offen is connected with fetching data, making some animations
    async componentDidMount() {
        try {
            const books = await this.service.getBooks();

            this.setState({ books });
        } catch(error) {
            this.setState({ error });
        }
    }

    render() {
        const { books, error } = this.state;

        if(!books.length) {
            return null;
        }

        if(error) {
            return <span>Something went wrong!</span>;
        }

        return(
            <ul>
                {
                    books.map(book => (
                        <li key={book.id}>Title: {book.title}</li>
                    ))
                }
            </ul>
        );
    }
}

export default BookList;