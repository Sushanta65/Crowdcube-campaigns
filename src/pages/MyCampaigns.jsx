import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyCampaigns = () => {
  const loadedCampaigns = useLoaderData()
  const {user} = useContext(AuthContext)
  const myCampaigns = loadedCampaigns.filter(campaign => campaign?.email === user?.email)
  
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl pb-2">My Campaigns Are Here</h2>
        <p className="text-gray-500">Explore all of the campaigns here.</p>
      </div>
      <div>

      </div>
    </div>
  );
};

export default MyCampaigns;
