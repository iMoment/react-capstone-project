import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, submitButtonLabel, onSubmit } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  return (
    <form
      className="m-4 rounded-lg border border-slate-200 bg-white p-4 font-lato shadow-md"
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await onSubmit(values);
        setIsLoading(false);
      }}
    >
      {fields.map((field) => (
        <Field
          key={field.label}
          label={field.label}
          type={field.type}
          value={values[field.label]}
          onChange={(e) => {
            setValues({ ...values, [field.label]: e.target.value });
          }}
        />
      ))}
      <button className="relative mt-4 w-full rounded-lg bg-emerald-700 py-2 text-white hover:bg-emerald-800">
        {submitButtonLabel}
        {isLoading && (
          <div className="absolute right-4 top-0 flex h-full items-center">
            <i className="fa-solid fa-spinner-third animate-spin text-xl text-green-300" />
          </div>
        )}
      </button>
    </form>
  );
};

export default AuthForm;
