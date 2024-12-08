import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const MyCampaigns = () => {
  const loadedCampaigns = useLoaderData();
  const { user } = useContext(AuthContext);
  const [myCampaigns, setMyCampaigns] = useState(
    loadedCampaigns.filter((campaign) => campaign?.email === user?.email)
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are You Sure to Delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete It!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/campaigns/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingCampaigns = myCampaigns.filter(
                (campaign) => campaign._id !== id
              );
              setMyCampaigns(remainingCampaigns);

              Swal.fire({
                title: "Deleted!",
                text: "The Campaign Has Been Deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl pb-2">My Campaigns</h2>
        <p className="text-gray-500 dark:text-gray-400">
          View and manage your campaigns here.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full bg-base-100 shadow-md rounded-lg">
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

          <tbody>
            {myCampaigns.map((campaign, index) => (
              <tr
                key={campaign._id}
                className={`hover:bg-blue-100 dark:hover:bg-gray-700 ${
                  index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-100 dark:bg-gray-900"
                }`}
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4 font-medium">{campaign.campaignTitle}</td>
                <td className="py-3 px-4">{campaign.campaignType}</td>
                <td className="py-3 px-4">{campaign.donationAmount}</td>
                <td className="py-3 px-4">{campaign.date}</td>
                
                <td className="py-3 px-4 flex space-x-2">
                  <Link
                    to={`/updateCampaign/${campaign._id}`}
                    className="btn btn-sm bg-green-500 text-white hover:bg-green-600 flex items-center gap-1"
                  >
                    <FiEdit /> Update
                  </Link>
                  <button
                    onClick={() => handleDelete(campaign._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600 flex items-center gap-1"
                  >
                    <FiTrash2 /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {myCampaigns.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            You have no campaigns added yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyCampaigns;
