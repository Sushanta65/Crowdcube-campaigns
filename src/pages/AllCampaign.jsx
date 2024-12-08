import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const AllCampaign = () => {
  const loadedCampaigns = useLoaderData();
  const { campaigns, setCampaigns } = useContext(AuthContext);

  
  setCampaigns(loadedCampaigns);

  return (
    <div className="container mx-auto px-4 my-10">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl pb-2">All Campaigns</h2>
        <p className="text-gray-500 dark:text-gray-400">Explore all of the campaigns added by users.</p>
      </div>

      <div className="overflow-x-auto shadow-2xl">
        <table className="table w-full bg-transparent shadow-md rounded-lg">
          <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
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
                className={` dark:hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-transparent" : "bg-transparent"
                }`}
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4 font-medium">{campaign.campaignTitle}</td>
                <td className="py-3 px-4">{campaign.campaignType}</td>
                <td className="py-3 px-4">{campaign.donationAmount}</td>
                <td className="py-3 px-4"><span className={new Date() < new Date(campaign.date)? 'bg-green-300 py-1 px-2 rounded-xl' : 'bg-red-300 py-1 px-2 rounded-xl'}>{new Date() < new Date(campaign.date)? 'Active':'Inactive'}</span></td>
                <td className="py-3 px-4">
                  <Link
                    to={`/campaigns/${campaign._id}`}
                    className="btn btn-primary"
                  >
                    See More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;

