import clsx from "clsx";
import { POT_COLORS } from "shared-components/util";

const PlantPurchaseOptions = (props) => {
  const { plant, imageIdx, setImageIdx } = props;

  return (
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
  );
};

export default PlantPurchaseOptions;
