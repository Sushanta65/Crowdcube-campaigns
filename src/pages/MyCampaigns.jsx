import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const MyCampaigns = () => {
  const loadedCampaigns = useLoaderData();
  const { user } = useContext(AuthContext);

  const myCampaigns = loadedCampaigns.filter(
    (campaign) => campaign?.email === user?.email
  );



  const handleDelete = (id) => {
    console.log("Delete campaign with ID:", id);
    Swal.fire({
      title: "Are You Sure to Delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete It!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/campaigns/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "The Campaign Has Been Deleted.",
              icon: "success"
            });
          }
        })
      }
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl pb-2">My Campaigns</h2>
        <p className="text-gray-500">View and manage your campaigns here.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full bg-base-100 shadow-md rounded-lg">
          <thead>
            <tr className="text-left bg-primary text-white">
              <th className="py-3 px-6">#</th>
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6">Type</th>
              <th className="py-3 px-6">Donation (BDT)</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>

          <tbody>
            {myCampaigns.map((campaign, index) => (
              <tr
                key={campaign._id}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6 font-medium">
                  {campaign.campaignTitle}
                </td>
                <td className="py-3 px-6">{campaign.campaignType}</td>
                <td className="py-3 px-6">{campaign.donationAmount}</td>
                <td className="py-3 px-6 flex space-x-2">
                  <Link
                    to={`/updateCampaign/${campaign._id}`}
                    className="btn btn-sm btn-info"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(campaign._id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {myCampaigns.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-lg text-gray-500">
            You have no campaigns added yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyCampaigns;
