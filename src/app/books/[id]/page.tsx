import { IBook } from "@/type/books.type";
import Image from "next/image";
import React from "react";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook;

  console.log(book, "book");
return (
  <div className="container mx-auto py-10 px-4">
    <div className="card lg:card-side bg-base-100 shadow-xl border border-gray-100 overflow-hidden">
      
      {/* Book Image */}
      <figure className="lg:w-[40%] bg-gray-100 p-8 lg:p-12">
        <Image
          src={book.image}
          alt={book.bookName}
          width={500}
          height={650}
          className="w-full max-w-[350px] h-[480px] object-cover rounded-xl shadow-lg"
        />
      </figure>

      {/* Book Details */}
      <div className="card-body lg:w-[60%] p-8 lg:p-12">

        {/* Category + Rating */}
        <div className="flex items-center justify-between gap-4">
          <span className="badge badge-success badge-outline px-4 py-3">
            {book.category}
          </span>

          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-xl">★</span>
            <span className="font-bold text-lg">{book.rating}</span>
          </div>
        </div>

        {/* Book Name */}
        <h1 className="text-3xl lg:text-4xl font-bold mt-3 text-gray-900">
          {book.bookName}
        </h1>

        {/* Author */}
        <p className="text-lg text-gray-500">
          By{" "}
          <span className="font-semibold text-gray-700">
            {book.author}
          </span>
        </p>

        {/* Divider */}
        <div className="divider my-2"></div>

        {/* Review */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">
            About this book
          </h3>

          <p className="text-gray-600 leading-7">
            {book.review}
          </p>
        </div>

        {/* Book Information */}
        <div className="grid grid-cols-2 gap-4 mt-5">
          
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">Pages</p>
            <p className="font-bold text-gray-800 mt-1">
              {book.totalPages}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">Published</p>
            <p className="font-bold text-gray-800 mt-1">
              {book.yearOfPublishing}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">Publisher</p>
            <p className="font-bold text-gray-800 mt-1">
              {book.publisher}
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">Category</p>
            <p className="font-bold text-gray-800 mt-1">
              {book.category}
            </p>
          </div>

        </div>

        {/* Tags */}
        <div className="mt-5">
          <p className="font-semibold text-gray-700 mb-3">
            Tags
          </p>

          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="card-actions mt-7">
          <button className="btn btn-success text-white px-8">
            Read Now
          </button>

          <button className="btn btn-outline btn-success px-8">
            Add to Wishlist
          </button>
        </div>

      </div>
    </div>
  </div>
);
};

export default BookDetailsPage;
