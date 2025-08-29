import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import * as userService from "services/user";
import RedirectToPlantsIfSignedIn from "shared-components/RedirectToPlantsIfSignedIn";

const SignUpPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <RedirectToPlantsIfSignedIn>
      <FormContainer>
        <div className="font-lato text-red-700">{error}</div>
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
            {
              label: "Confirm password:",
              type: "password",
            },
          ]}
          submitButtonLabel="Create account"
          onSubmit={async (values) => {
            if (values["Username:"].length < 4) {
              setError("Username must contain at least 4 characters.");
              return;
            }

            if (values["Password:"].length < 4) {
              setError("Password must contain at least 4 characters.");
              return;
            }

            if (values["Password:"] !== values["Confirm password:"]) {
              setError("Passwords do not match.");
              return;
            }

            const response = await userService.createUser({
              username: values["Username:"],
              password: values["Password:"],
            });

            if (response.status === 201) {
              setError("");
              navigate("/", {
                state: {
                  accountCreated: true,
                },
              });
            } else {
              const data = await response.json();
              setError(data.error);
            }
          }}
        />
        <Link
          to="/"
          className="text-sm text-green-600 underline hover:text-green-700"
        >
          Already have an account?
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};

export default SignUpPage;
