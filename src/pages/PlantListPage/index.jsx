import { useEffect } from "react";
import NavigationBar from "shared-components/NavigationBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import * as plantService from "services/plant";

const PlantListPage = () => {
  useEffect(() => {
    (async () => {
      const response = await plantService.getPlants();
      const data = await response.json();
      console.log(data);
    })();
  }, []);

  return (
    <RedirectToSignInIfSignedOut>
      <NavigationBar />
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
