import { useState } from "react";
import clsx from "clsx";

const POT_COLORS = {
  stone: "bg-stone-200",
  slate: "bg-slate-300",
  sky: "bg-sky-700",
  black: "bg-gray-600",
  white: "bg-gray-50",
  amber: "bg-amber-600",
};

const getRandomIdx = (array) => {
  return Math.floor(Math.random() * array.length);
};

const PlantItem = (props) => {
  const { plant } = props;
  const [imageIdx, setImageIdx] = useState(() => getRandomIdx(plant.images));

  return (
    <div className="mx-5 my-8">
      <div className="relative">
        <img
          className="h-[320px] w-[280px] rounded-md shadow-xl"
          src={plant.images[imageIdx].src}
        />
        <div className="absolute left-0 top-0 h-full w-full rounded-md hover:bg-black/10"></div>
      </div>
      <div className="my-3 flex justify-between">
        <div className="font-playfair text-xl text-emerald-700">
          {plant.name}
        </div>
        <div className="text-lg text-emerald-600">${plant.price}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-sm text-slate-500">
          {plant.images[imageIdx].pot_color}
        </div>
        <div className="flex">
          {plant.images.map((image, idx) => (
            <div
              key={idx}
              className={clsx(
                "mx-[3px] h-5 w-5 rounded-full border border-slate-300",
                POT_COLORS[image.pot_color],
                imageIdx === idx &&
                  "outline outline-offset-2 outline-slate-400",
              )}
              onMouseEnter={() => {
                setImageIdx(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
