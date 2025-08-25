import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";

const SignInPage = () => {
  return (
    <FormContainer>
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
      />
      <Link to="/sign-up" className="text-sm text-green-600 underline">
        Don't have an account?
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
