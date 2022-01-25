import React from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { addToBag } from "../actions";

const Products = props => {
  return (
    <div>
      <h2>
        <span>Book List</span>
        <Link to="/card">My Bag</Link>
      </h2>
      {props.bookList.map(book =>  
      <div className="book" key={book.id}>
        <img
          src={book.image}
          alt={book.name}
        />
        <div>
          <h4>{book.name}</h4>
          <p>Author: {book.author}</p>
          <p>Price: &#8378; {book.price}</p>
          <button onClick ={() => props.addToBag(book)}>Add to bag</button>
        </div>
      </div>)}
     
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bookList: state.bookList,
    card: state.card
  }
};



export default connect(
  mapStateToProps,
  {addToBag}
  )(Products);
