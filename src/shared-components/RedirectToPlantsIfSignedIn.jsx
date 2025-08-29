import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SessionContext from "contexts/SessionContext";

const RedirectToPlantsIfSignedIn = (props) => {
  // If signed in, redirect to PlantListPage
  // Otherwise, render the children
  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== null) {
      navigate("/plants");
    }
  }, [username]);

  return props.children;
};

export default RedirectToPlantsIfSignedIn;
