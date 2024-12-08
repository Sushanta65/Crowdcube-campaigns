import { useEffect, useState } from "react";
import Campaign from "./Campaign";

const ActiveCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/activeCampaigns", )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCampaigns(data);
      });
  }, []);
  const activeCampaigns = campaigns.filter(
    (campaign) => new Date() < new Date(campaign.date)
  );

  console.log(activeCampaigns);

  return (
    <div className="my-20">
        
      <div className="text-center mb-8 pb-10" >
        <h2 className="font-bold text-3xl pb-2">Running Campaigns</h2>
        <p className="text-gray-500 dark:text-gray-400">Explore all of the campaigns added by users.</p>
      </div>

       {campaigns.length?  <div className="grid grid-cols-3 w-4/5 mx-auto gap-10 my-2">
        {
            activeCampaigns.map(campaign => <Campaign key={campaign._id} campaign={campaign}></Campaign>)
        }
    </div> : <div className=" text-center text-blue-700"><span className="loading loading-dots loading-lg"></span></div>}
    </div>
  );
};

export default ActiveCampaigns;
