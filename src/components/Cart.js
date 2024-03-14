import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="p-4 m-4 text-center">
        <h1 className="text-2xl font-bold"> Cart</h1>
        <div className="w-6/12 m-auto">
          <button
            className="p-4 m-4 bg-black text-white rounded-lg hover:scale-105 hover:transition-transform"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length === 0 && (
            <h1>Your cart is Empty . Add Items to the cart.</h1>
          )}
          <ItemList items={cartItems} />
        </div>
      </div>
    </>
  );
};

export default Cart;
