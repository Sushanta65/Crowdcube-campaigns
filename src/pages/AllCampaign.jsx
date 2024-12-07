import { useLoaderData } from "react-router-dom";
import Campaign from "../components/Campaign";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AllCampaign = () => {
  const loadedCampaigns = useLoaderData();
  const {campaigns, setCampaigns} = useContext(AuthContext)
  setCampaigns(loadedCampaigns)
  console.log(campaigns)
  return (
    <div className="container mx-auto px-4 my-10">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl pb-2">All Campaigns Are Here</h2>
        <p className="text-gray-500">Explore all of the campaigns here.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {campaigns?.map((campaign) => (
          <Campaign key={campaign._id} campaign={campaign} campaigns={campaigns} setCampaigns={setCampaigns}></Campaign>
        ))}
      </div>
    </div>
  );
};

export default AllCampaign;
