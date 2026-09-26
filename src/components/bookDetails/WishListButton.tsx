"use client";

import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/type/books.type';
import React, { useContext } from 'react';

const WishListButton = ({book}: {book: IBook}) => {

  const {wishlist, setWishlist } = useContext(BooksContext)

    const handleAddToWishlist = () => {
        
        console.log("read book btn taped", book);

        setWishlist ([...wishlist, book]);
        alert (`You have added "${book.bookName}" to wishlist`);
    };

 return (
        <button className="btn btn-success text-white px-8" onClick={() => handleAddToWishlist()}>
            Add to Wishlist
          </button>
    );
};

export default WishListButton;