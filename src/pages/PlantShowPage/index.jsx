import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "shared-components/NavigationBar";
import * as plantService from "services/plant";
import LoadingSpinner from "shared-components/LoadingSpinner";
import PlantInfoSection from "./PlantInfoSection";

const PlantShowPage = () => {
  const [plant, setPlant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { plantId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlantById({ id: plantId });
      const data = await response.json();
      setPlant(data);
      setIsLoading(false);
    })();
  }, [plantId]);

  return (
    <>
      <NavigationBar />
      <div className="flex min-h-screen justify-center bg-green-50 font-lato">
        <div className="w-full max-w-5xl px-8 py-24">
          {isLoading ? <LoadingSpinner /> : <PlantInfoSection plant={plant} />}
        </div>
      </div>
    </>
  );
};

export default PlantShowPage;
