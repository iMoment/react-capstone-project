import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import * as userService from "services/user";

const SignInPage = () => {
  const [error, setError] = useState("");
  const location = useLocation();

  return (
    <FormContainer>
      <div className="font-lato text-red-700">{error}</div>
      {location.state?.accountCreated && (
        <div className="mx-4 mb-6 rounded-lg border border-emerald-500 bg-green-200 p-4 text-emerald-700">
          Account created successfully. Please sign in.
        </div>
      )}
      <AuthForm
        fields={[
          {
            label: "Username:",
            type: "text",
          },
          {
            label: "Password:",
            type: "password",
          },
        ]}
        submitButtonLabel="Sign In"
        onSubmit={async (values) => {
          const response = await userService.createSession({
            username: values["Username:"],
            password: values["Password:"],
          });

          if (response.status === 201) {
            console.log("Sign in successful.");
            setError("");
          } else {
            const data = await response.json();
            setError(data.error);
          }
        }}
      />
      <Link
        to="/sign-up"
        className="text-sm text-green-600 underline hover:text-green-700"
      >
        Don't have an account?
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
