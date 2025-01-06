import { useEffect, useState } from "react";
import Campaign from "./Campaign";

const ActiveCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("https://crowdcube-server-wheat.vercel.app/activeCampaigns")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCampaigns(data);
      });
  }, []);

  const activeCampaigns = campaigns.filter(
    (campaign) => new Date() < new Date(campaign.date)
  );

  console.log("active campaigns", activeCampaigns);

  return (
    <div className="my-20">
      {/* Header Section */}
      <div className="text-center mb-8 pb-10">
        <h2 className="font-bold text-4xl text-green-700 dark:text-green-500 pb-2">
          Running Campaigns
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Explore all the campaigns currently running and added by users.
        </p>
      </div>

      {/* Campaign Grid or Loading Indicator */}
      {campaigns.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-4/5 mx-auto gap-8 my-4">
          {activeCampaigns.map((campaign) => (
            <Campaign key={campaign._id} campaign={campaign}></Campaign>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center text-green-700 dark:text-green-500">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default ActiveCampaigns;
