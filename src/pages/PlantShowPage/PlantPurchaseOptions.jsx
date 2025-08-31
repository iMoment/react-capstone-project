import { useState } from "react";
import clsx from "clsx";
import { POT_COLORS } from "shared-components/util";
import * as cartService from "services/cart";

const PlantPurchaseOptions = (props) => {
  const { plant, imageIdx, setImageIdx } = props;
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="my-10">
        <div className="flex text-emerald-700">
          <i className="fa-solid fa-brush mr-2 text-2xl"></i>
          <div className="text-lg">Pot Colors</div>
        </div>
        <div className="my-4 flex">
          {plant.images.map((image, idx) => (
            <div
              key={image.pot_color}
              className="mx-2 flex flex-col items-center"
              onMouseEnter={() => setImageIdx(idx)}
            >
              <div
                className={clsx(
                  "h-10 w-10 rounded-full border border-slate-300",
                  POT_COLORS[image.pot_color],
                  imageIdx === idx &&
                    "outline outline-offset-2 outline-slate-400",
                )}
              ></div>
              <div
                className={clsx(
                  "mt-1",
                  imageIdx === idx
                    ? "font-semibold text-slate-600"
                    : "text-slate-500",
                )}
              >
                {image.pot_color}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center rounded-full border-2 border-slate-300 px-4 py-3 text-xl text-slate-500">
          <button
            className="hover:text-emerald-700"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="mx-6 text-2xl text-emerald-700">{quantity}</div>
          <button
            className="hover:text-emerald-700"
            onClick={() => setQuantity(quantity + 1)}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <button
          className="ml-2 flex flex-1 items-center justify-center rounded-full bg-emerald-700 text-xl text-white hover:bg-emerald-800"
          onClick={async () => {
            setIsLoading(true);
            const response = await cartService.addPlantToCart({
              quantity,
              plantId: plant.id,
              potColor: plant.images[imageIdx].pot_color,
            });
            setIsLoading(false);

            console.log(response.status);
          }}
        >
          {isLoading ? (
            <i className="fa-solid fa-spinner-third mr-2 w-8 animate-spin text-xl text-emerald-50" />
          ) : (
            <i className="fa-solid fa-cart-plus mr-2 mt-1 w-8 text-xl" />
          )}
          Add to cart
        </button>
      </div>
    </>
  );
};

export default PlantPurchaseOptions;
