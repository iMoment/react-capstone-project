import { useState, useContext, useEffect } from "react";
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

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await cartService.getCart();
      const data = await response.json();
      setCartItems(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <RemoveScroll>
      <div className="fixed left-0 top-0 flex h-full w-full justify-end bg-black/30 font-lato backdrop-blur-sm">
        <div className="h-screen w-full max-w-xl bg-white">
          <button
            className="absolute right-0 top-0 p-4"
            onClick={() => setIsCartModalOpen(false)}
          >
            <i className="fa-regular fa-circle-xmark text-4xl text-emerald-50" />
          </button>
          <div className="bg-emerald-800 py-9 text-center font-playfair text-3xl text-white shadow-md">
            {username}'s cart
          </div>
          <div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div>
                  {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </RemoveScroll>
  );
};

export default CartModal;
