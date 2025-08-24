import AuthForm from "./AuthForm";

// needs three different fields
const SignUpPage = () => {
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
          {
            label: "Confirm password:",
            text: "password",
          },
        ]}
        submitButtonLabel="Create account"
      />
    </div>
  );
};

export default SignUpPage;
