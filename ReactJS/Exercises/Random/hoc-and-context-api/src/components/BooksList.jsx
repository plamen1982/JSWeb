import React from "react";
import BooksService from "../services/books-service";
import withDataFromService from "./hocs/with-data-from-services";

const BookList = (props) => {
    const { data, error } = props;

    if (!data.length) {
        return null;
    }

    if (error) {
        return <span>Something went wrong!</span>;
    }

    return (
        <ul>
            {
                data.map(book => (
                <li key={book.id}>Title: {book.title}</li>
            ))
            }
        </ul>
    );
};

export default withDataFromService(BookList, [], new BooksService().getBooks);
