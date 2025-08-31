import * as cartService from "services/cart";

const CartItem = (props) => {
  const { cartItem, fetchCart } = props;

  console.log(cartItem);

  return (
    <div className="flex">
      <img className="w-28 rounded-md" src={cartItem.image_src} />
      <div className="mx-4 flex flex-1 justify-between">
        <div className="">
          <div className="font-playfair text-xl text-emerald-700">
            {cartItem.plant_name}
          </div>
          <div className="my-1 flex text-slate-500">
            <div className="w-14 text-slate-400">Color:</div>
            {cartItem.pot_color}
          </div>
          <div className="my-1 flex text-slate-500">
            <div className="w-14 text-slate-400">Qty:</div>
            {cartItem.quantity}
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="text-slate-500">
            ${cartItem.quantity * cartItem.price_per_unit}
          </div>
          <button
            className="text-sm text-slate-400 hover:text-red-800"
            onClick={async () => {
              await cartService.removeItemFromCart({ itemId: cartItem.id });
              fetchCart();
            }}
          >
            <i className="fa-regular fa-trash mr-1 text-base" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
