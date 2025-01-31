import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newBook, setNewBook] = useState({
    url: "",
    name: "",
    category: "",
    author: "",
    description: "",
  });

  const handleInput = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Book:", newBook);
    //  API call to save the new book
        axios({
          url:`https://peppermint-carnelian-captain.glitch.me/books`,
          method:"POST"
        }).then((res)=>{
          alert("Book Added Successfully")
          fetchBooks()
          setShowForm(false)
          setNewBook({url:"",name:"",category:"",author:"",description:""})
        }).catch((err)=>{
          console.log(err)
        }).finallly(()=>{
          setIsLoading(false)
        })
  };

  const fetchBooks = () => {
    setIsLoading(true);
    axios
      .get("https://peppermint-carnelian-captain.glitch.me/books")
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Book List</h1>
          {books.length > 0 &&
            books.map((e) => (
              <React.Fragment key={e.id}>
                <div className="book-card">
                  <img src={e.coverImage} alt="book-image" />
                  <h4>{e.name}</h4>
                  <p>Genre: {e.category}</p>
                  <p>Price: {e.price}</p>
                  <p>Author: {e.author}</p>
                  <p>Description: {e.description}</p>
                  <Link to={`https://peppermint-carnelian-captain.glitch.me/books/${e.id}`}>
                    View Details
                  </Link>
                </div>
              </React.Fragment>
            ))}

          {showForm ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name of the Book"
                name="name"
                onChange={handleInput}
                value={newBook.name}
              />
              <input
                type="text"
                placeholder="Category"
                name="category"
                onChange={handleInput}
                value={newBook.category}
              />
              <input
                type="text"
                placeholder="Place the URL"
                name="url"
                onChange={handleInput}
                value={newBook.url}
              />
              <input
                type="text"
                placeholder="Description"
                name="description"
                onChange={handleInput}
                value={newBook.description}
              />
              <button type="submit">Add Book</button>
            </form>
          ) : (
            <button onClick={() => setShowForm(true)}>Add Book</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Books;

