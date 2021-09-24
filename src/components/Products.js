import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

const Products = props => {
    const context = useContext(BooksContext);
    console.log(context);

    const totalCartCount = context.state.cart
        .reduce((total, book) => (total = total + book.count), 0);

    return (
        <div>
            <h2>
                <span>Book List</span>
                <Link to="/cart">
                    <span>My Cart({totalCartCount})
                    </span>
                </Link>
            </h2>
            {context.state.bookList.map(book => (
                <div key={book.id} className="book">
                    <img src={book.image} alt={book.name} />
                    <div>
                        <h4>{book.name}</h4>
                        <p>{book.author}</p>
                        <p>{book.price}</p>
                        <button onClick={() => context.addToCart(book)}>Add cart</button>
                    </div>
                </div>))}
        </div>
    );
};

export default Products;
