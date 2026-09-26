"use client";

import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/type/books.type';
import React, { useContext } from 'react';

const ReadButton = ({book}: {book: IBook}) => {

  const {readBooks, setReadBooks } = useContext(BooksContext)

    const handleReadBook = () => {
        
        console.log("read book btn taped", book);

        setReadBooks ([...readBooks, book]);
        alert (`You have read "${book.bookName}"`);
    };

 return (
        <button className="btn btn-success text-white px-8" onClick={() => handleReadBook()}>
            Read Now
          </button>
    );
};

export default ReadButton;