import NavigationBar from "shared-components/NavigationBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";

const PlantListPage = () => {
  return (
    <RedirectToSignInIfSignedOut>
      <NavigationBar />
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
