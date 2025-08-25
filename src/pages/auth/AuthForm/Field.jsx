const Field = (props) => {
  const { label, type, value, onChange } = props;

  return (
    <div className="my-4 flex flex-col">
      <label htmlFor={label} className="pl-1 text-slate-500">
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        className="w-64 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 hover:bg-slate-100 focus:outline-emerald-600"
      />
    </div>
  );
};

export default Field;
