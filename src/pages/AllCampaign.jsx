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
    <div className="container mx-auto px-4 my-10">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl pb-2 text-success">
          All Campaigns
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Explore all of the campaigns added by users.
        </p>
      </div>
      {campaigns.length > 0 && (
        <div className="text-right py-5">
          <button
            onClick={handleSortCampaign}
            className="btn btn-sm bg-success text-white hover:bg-success-focus"
          >
            Sort By Donation Cost
          </button>
        </div>
      )}
      {campaigns.length > 0 ? (
        <div className="overflow-x-auto shadow-2xl">
          <table className="table w-full bg-transparent shadow-md rounded-lg">
            <thead className="bg-gradient-to-r from-green-500 to-green-700 text-white">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Donation (BDT)</th>
                <th className="py-3 px-4 text-left">Active Status</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="dark:text-gray-200">
              {campaigns?.map((campaign, index) => (
                <tr
                  key={campaign._id}
                  className={`dark:hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-transparent" : "bg-transparent"
                  }`}
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4 font-medium">
                    {campaign.campaignTitle}
                  </td>
                  <td className="py-3 px-4">{campaign.campaignType}</td>
                  <td className="py-3 px-4">{campaign.donationAmount}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`py-1 px-2 rounded-xl ${
                        new Date() < new Date(campaign.date)
                          ? "text-green-600 bg-green-100"
                          : "text-red-500 bg-red-100"
                      }`}
                    >
                      {new Date() < new Date(campaign.date)
                        ? "Active"
                        : "Inactive"}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Link
                      to={`/campaigns/${campaign._id}`}
                      className="btn btn-sm bg-success text-white hover:bg-success-focus"
                    >
                      See More
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
