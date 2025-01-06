import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("https://crowdcube-server-wheat.vercel.app/campaigns")
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
      });
  }, []);

  const handleSortCampaign = () => {
    const sortedCampaigns = [...campaigns].sort((a, b) => {
      return a.donationAmount - b.donationAmount;
    });
    setCampaigns(sortedCampaigns);
  };

  return (
    <div className="container mx-auto px-4 my-16">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl pb-2 text-green-600">All Campaigns</h2>
        <p className="text-gray-600">
          Explore all of the campaigns added by users.
        </p>
      </div>

      {campaigns.length > 0 && (
        <div className="text-right py-5">
          <button
            onClick={handleSortCampaign}
            className="btn bg-green-600 text-white hover:bg-green-500 transition duration-300"
          >
            Sort By Donation Cost
          </button>
        </div>
      )}

      {campaigns.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => (
            <div
              key={campaign._id}
              className=" p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="font-medium text-2xl text-gray-600 mb-2">{campaign.campaignTitle}</h3>
              <p className="text-lg  mb-3">{campaign.campaignType}</p>
              <p className="text-lg text-green-700 font-semibold">
                Donation Goal: <span className="text-xl">{campaign.donationAmount} BDT</span>
              </p>

              <div className="mt-4">
                <span
                  className={`py-1 px-2 text-sm font-semibold rounded-full ${
                    new Date() < new Date(campaign.date)
                      ? "bg-green-300 text-green-600"
                      : "bg-red-300 text-red-600"
                  }`}
                >
                  {new Date() < new Date(campaign.date) ? "Active" : "Inactive"}
                </span>
              </div>

              <div className="mt-6 text-center">
                <Link
                  to={`/campaigns/${campaign._id}`}
                  className="btn bg-green-600 text-white hover:bg-green-500 transition duration-300 py-2 px-4 rounded-lg"
                >
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-green-700">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default AllCampaign;
