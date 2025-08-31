import clsx from "clsx";

const BenefitBox = (props) => {
  const { icon, title, description } = props;

  return (
    <div className="flex flex-1 flex-col items-center px-2 py-4">
      <i className={clsx("text-3xl text-emerald-700", icon)}></i>
      <div className="my-1 text-slate-700">{title}</div>
      <div className="text-center text-sm text-slate-500">{description}</div>
    </div>
  );
};

export default BenefitBox;
