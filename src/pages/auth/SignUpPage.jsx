import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";

const SignUpPage = () => {
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
          {
            label: "Confirm password:",
            text: "password",
          },
        ]}
        submitButtonLabel="Create account"
      />
      <Link to="/" className="text-sm text-green-600 underline">
        Already have an account?
      </Link>
    </FormContainer>
  );
};

export default SignUpPage;
