import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/type/books.type";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">
      
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          Explore All Books
        </h2>

        <p className="text-gray-500 mt-3">
          Discover stories, ideas, and new perspectives from your favorite books.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        
        {booksData.map((book: IBook , ind: number) => {
            return <BookCard key={ind} book={book} />
 
})}

      </div>
    </section>
  );
};

export default Books;