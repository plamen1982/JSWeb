//HOC Pattern
// import React from "react";
// import BooksService from "../services/books-service";
// import withDataFromService from "./hocs/with-data-from-services";

// const BookList = (props) => {
//     const { data, error } = props;

//     if (!data.length) {
//         return null;
//     }

//     if (error) {
//         return <span>Something went wrong!</span>;
//     }

//     return (
//         <ul>
//             {
//                 data.map(book => (
//                 <li key={book.id}>Title: {book.title}</li>
//             ))
//             }
//         </ul>
//     );
// };

// export default withDataFromService(BookList, [], new BooksService().getBooks);

//render prop Pattern

import React from "react";
import BooksService from "../services/books-service";
import DataFromServiceProvider from "./render-with-data-from-service";

const BookList = (props) => {
    const { data, error, theme } = props;

    if (!data.length) {
        return null;
    }

    if (error) {
        return <span>Something went wrong!</span>;
    }

    return (
        <ul className={theme}>
            {
                data.map(book => (
                <li key={book.id}>Title: {book.title}</li>
            ))
            }
        </ul>
    );
};

const BookListWithServiceDataProvider = ({ theme }) => (
    <DataFromServiceProvider 
        initialData={[]}
        serviceMethod={new BooksService().getBooks}
        render={(data) => <BookList data={data} theme={theme}/>
    }
/>);

export default BookListWithServiceDataProvider;