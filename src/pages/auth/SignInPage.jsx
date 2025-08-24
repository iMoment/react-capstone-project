import AuthForm from "./AuthForm";

// Needs two different fields
const SignInPage = () => {
  return (
    <div className="flex items-center justify-center">
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
    </div>
  );
};

export default SignInPage;
