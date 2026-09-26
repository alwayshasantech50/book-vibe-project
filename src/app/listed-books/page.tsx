"use client";

import { BooksContext } from "@/context/BooksContext";
import React, { useContext } from "react";



const ListedBooks = () => {
 const {readBooks, wishlist} = useContext(BooksContext);
 console.log(readBooks, wishlist, "readBooks", "wishlist");

  return <div>
    Listed books <br />| Total Read books: {readBooks.length} <br /> | Total wishlist books: {wishlist.length} 
       </div>;
};

export default ListedBooks;
