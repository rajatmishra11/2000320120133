import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const imgUrl =
  "https://images-eu.ssl-images-amazon.com/images/I/91msEbTletL._AC_UL600_SR600,400_.jpg";
const title = "Shrimad Bhagwat Geeta Yatharoop";
const author = "A.C. Bhaktivendanta Swami Prabhupada";

const imgUrl2 =
  "https://images-eu.ssl-images-amazon.com/images/I/71CrTyKsazL._AC_UL600_SR600,400_.jpg";
const title2 = "Indian Polity (English| 7th Edition)";
const author2 = "M Laxmikanth ";

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} imgUrl={imgUrl} />
      <Book author={author2} title={title2} imgUrl={imgUrl2} />
      {/* <Book />
      <Book />
      <Book />
      <Book /> */}
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.imgUrl} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
