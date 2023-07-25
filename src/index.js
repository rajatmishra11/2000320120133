import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.css";

const Book = () => {
  return (
    <article>
      <img
        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1tXph6SVIgQBULTiQzm3ITCpVIq2W3rLUxHFrSbErsWhznkI1"
        height={150}
        width={90}
        alt="Don quixot"
      />
      <h2>Don quixot</h2>
      <h4>Miguelde cervantes</h4>
    </article>
  );
};

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
