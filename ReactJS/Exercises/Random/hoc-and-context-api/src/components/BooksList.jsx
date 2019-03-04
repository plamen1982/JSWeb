import React from "react";
import BooksService from "../services/books-service";
import withDataFromService from "./hocs/with-data-from-services";

const BookList = () => {
    const { books, error } = this.props;

    if (!books.length) {
        return null;
    }

    if (error) {
        return <span>Something went wrong!</span>;
    }

    return (
        <ul>
            {
                books.map(book => (
                <li key={book.id}>Title: {book.title}</li>
            ))
            }
        </ul>
    );
};

const BookListHoc = withDataFromService(BookList, [], new BooksService().getBooks);

export default BookList;
