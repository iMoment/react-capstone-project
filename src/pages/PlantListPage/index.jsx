import { useState, useEffect } from "react";
import NavigationBar from "shared-components/NavigationBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import * as plantService from "services/plant";
import PlantItem from "./PlantItem";
import LoadingSpinner from "shared-components/LoadingSpinner";

const PlantListPage = () => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();
      setPlants(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <RedirectToSignInIfSignedOut>
      <NavigationBar />
      <div className="min-h-screen bg-green-50">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl">
              <div className="mb-6 px-4 font-playfair text-4xl text-emerald-800">
                Plants In Stock
              </div>
              <div className="flex flex-wrap justify-center">
                {plants.map((plant) => (
                  <PlantItem key={plant.name} plant={plant} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </RedirectToSignInIfSignedOut>
  );
};

export default PlantListPage;
