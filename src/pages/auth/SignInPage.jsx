import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import * as userService from "services/user";
import SessionContext from "contexts/SessionContext";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";

const SignInPage = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const sessionContext = useContext(SessionContext);

  return (
    <RedirectToPlantsIfSignedIn>
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

            const data = await response.json();
            if (response.status === 201) {
              console.log("Sign in successful.");
              sessionContext.signIn(data.capstone_session_token);
              setError("");
            } else {
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
    </RedirectToPlantsIfSignedIn>
  );
};

export default SignInPage;
