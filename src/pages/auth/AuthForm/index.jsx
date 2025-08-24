import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, submitButtonLabel } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  console.log(values);

  return (
    <form className="m-4 rounded-lg border border-slate-200 bg-white p-4 font-lato">
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
      <button className="mt-4 w-full rounded-lg bg-emerald-700 py-2 text-white">
        {submitButtonLabel}
      </button>
    </form>
  );
};

export default AuthForm;
