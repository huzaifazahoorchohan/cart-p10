import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "../context&reducer/context";

function CartContainer() {
  const { cart, clearCart, total } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cart.map((item) => {
          return <CartItem {...item} key={item.id} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
