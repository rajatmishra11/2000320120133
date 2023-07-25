import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
  return (
    <article>
      <h2>Book Image Placeholder</h2>
      <h2>Book title</h2>
      <h2>Author name</h2>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
// root.render(<Fun1/>)
import React from 'react'
import ReactDOM from 'react-dom/client'

const BookList = () => {
    return (
        <article>
            <h2>Book Image Placeholder</h2>
            <h2>Book title</h2>
            <h2>Author name</h2>
        </article>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />)
// root.render(<Fun1/>)