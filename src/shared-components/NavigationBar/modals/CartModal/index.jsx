import clsx from "clsx";
import { useState, useContext, useEffect, useCallback } from "react";
import { RemoveScroll } from "react-remove-scroll";
import SessionContext from "contexts/SessionContext";
import LoadingSpinner from "shared-components/LoadingSpinner";
import * as cartService from "services/cart";
import CartItem from "./CartItem";

const CartModal = (props) => {
  const { setIsCartModalOpen } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const { username } = useContext(SessionContext);

  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    const response = await cartService.getCart();
    setCartItems(await response.json());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalQuantity = 0;
  let subTotal = 0;
  for (let item of cartItems) {
    totalQuantity += item.quantity;
    subTotal += item.quantity * item.price_per_unit;
  }

  return (
    <div className="flex h-screen w-full max-w-xl flex-col bg-green-50">
      <div className="bg-emerald-800 py-9 text-center font-playfair text-3xl text-white shadow-md">
        {username}'s cart
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex-1 overflow-y-scroll pb-16">
            {cartItems.map((cartItem, idx) => (
              <div
                key={cartItem.id}
                className={clsx(
                  "mx-5 mt-8 pt-8",
                  idx !== 0 && "border-t border-slate-200",
                )}
              >
                <CartItem cartItem={cartItem} fetchCart={fetchCart} />
              </div>
            ))}
          </div>
          <div className="flex flex-col border-t border-slate-200 px-4 pb-4">
            <div className="flex justify-between py-4 text-slate-400">
              <div>{totalQuantity} items</div>
              <div>
                Subtotal:
                <span className="ml-2 text-lg text-slate-500">${subTotal}</span>
              </div>
            </div>
            <button
              className="flex items-center justify-center rounded-full bg-emerald-700 py-3 text-lg text-white"
              onClick={() => {
                alert("This app is not a real plant selling site.");
              }}
            >
              Checkout{" "}
              <i className="fa-regular fa-arrow-right-to-line ml-2 text-2xl" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
