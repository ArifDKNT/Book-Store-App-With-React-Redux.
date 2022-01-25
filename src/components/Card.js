import React from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

const Card = (props) => {
  const totalPrice = props.card.reduce((total,item) => (total += item.price),0);
  return (
    <div>
      <h2>
        <Link to="/">Book List</Link> <span>Your Bag</span>
      </h2>

      <h3>Total Price: &#8378;{totalPrice.toFixed(2)}</h3>
      {props.card.map(book => (
        <div className="book">
        <img
          src={book.image}
          alt={book.name}
        />
        <div>
          <h4>{book.name}</h4>
          <p>Author: {book.author}</p>
          <p>Price: &#8378;{book.price}</p>
          <button>-</button>
          <button>Remove</button>
          <button>+</button>
        </div>
      </div>
      ))}
      


    </div>
  );
};

const mapStateProps = state => {
  return{
    card: state.card
  }
}
export default connect(mapStateProps)(Card);
