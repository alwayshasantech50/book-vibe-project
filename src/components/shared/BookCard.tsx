import { IBook } from '@/type/books.type';
import Image from 'next/image';
import React from 'react';


interface IBookCardProps {
    book: IBook;
}

const BookCard = ({book}: IBookCardProps) => {
    return (
         <div
    key={book.bookId}
    className="group border border-gray-200 rounded-2xl p-5 bg-white shadow-sm
    hover:shadow-2xl hover:-translate-y-2 hover:border-green-300
    transition-all duration-300"
  >
    {/* Book Image */}
    <div className="bg-gray-100 rounded-xl p-6 flex justify-center mb-5 overflow-hidden">
      <Image
        src={book.image}
        alt={book.bookName}
        width={800}
        height={600}
        className="h-[250px] w-[170px] object-cover rounded-lg shadow-md
        group-hover:scale-105 transition-transform duration-300"
      />

    </div>

    {/* Category & Rating */}
    <div className="flex justify-between items-center mb-4">
      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
        {book.category}
      </span>

      <span className="font-semibold text-gray-700">
        ⭐ {book.rating}
      </span>
    </div>

    {/* Book Name */}
    <h3
      className="text-2xl font-bold text-gray-900
      group-hover:text-green-600 transition-colors duration-300"
    >
      {book.bookName}
    </h3>

    {/* Author */}
    <p className="text-gray-500 mt-1">
      by {book.author}
    </p>

    {/* Review */}
    <p className="text-gray-600 mt-4 leading-6 line-clamp-3">
      {book.review}
    </p>

    {/* Divider */}
    <div className="border-t border-gray-200 my-5"></div>

    {/* Book Information */}
    <div className="flex justify-between text-sm text-gray-500">
      <span>📖 {book.totalPages} pages</span>
      <span>📅 {book.yearOfPublishing}</span>
    </div>

    {/* Publisher */}
    <p className="text-sm text-gray-500 mt-3">
      Publisher:{" "}
      <span className="font-medium text-gray-700">
        {book.publisher}
      </span>
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mt-4">
      {book.tags.map((tag: string, index: number) => (
        <span
          key={index}
          className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
        >
          #{tag}
        </span>
      ))}
    </div>

    {/* Button */}
    <button
      className="w-full mt-6 bg-green-600 text-white font-semibold py-3 rounded-xl
      hover:bg-green-700 group-hover:shadow-md
      transition-all duration-300 cursor-pointer"
    >
      View Details →
    </button>
  </div>
    );
};

export default BookCard;