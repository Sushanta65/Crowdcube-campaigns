import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import {
  FiImage,
  FiType,
  FiDollarSign,
  FiCalendar,
  FiMail,
  FiUser,
  FiFileText,
} from "react-icons/fi";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
  const campaign = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    _id,
    thumnailUrl,
    campaignTitle,
    campaignType,
    description,
    donationAmount,
    date,
  } = campaign;

  const handleUpdateCampaign = (event) => {
    event.preventDefault();

    const form = event.target;
    const updatedCampaign = {
      thumnailUrl: form.thumnailUrl.value,
      campaignTitle: form.campaignTitle.value,
      campaignType: form.campaignType.value,
      description: form.description.value,
      donationAmount: form.donationAmount.value,
      date: form.date.value,
      email: user?.email,
      name: user?.displayName,
    };

    fetch(`https://crowdcube-server-wheat.vercel.app/campaigns/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        if (data.acknowledged) {
          Swal.fire({
            title: "Updated Successfully.",
            html: "Well Done! You updated the campaign!",
            icon: "success",
            timer: 4000,
            timerProgressBar: true,
          });
        }
      });
  };

  return (
    <div className="container mx-auto p-6 mt-10">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl pb-2 text-green-600">Update Campaign</h2>
        <p className="text-gray-600">
          Edit and update your campaign details.
        </p>
      </div>

      <form
        onSubmit={handleUpdateCampaign}
        className="space-y-6  p-6 rounded-lg shadow-xl"
      >
        <div className="flex items-center gap-3">
          <FiImage className="text-xl text-green-600" />
          <input
            className="input input-bordered w-full focus:ring-green-500"
            required
            type="url"
            defaultValue={thumnailUrl}
            placeholder="Thumbnail URL"
            name="thumnailUrl"
          />
        </div>

        <div className="flex items-center gap-3">
          <FiType className="text-xl text-green-600" />
          <input
            className="input input-bordered w-full focus:ring-green-500"
            required
            type="text"
            defaultValue={campaignTitle}
            placeholder="Campaign Title"
            name="campaignTitle"
          />
        </div>

        <div className="flex items-center gap-3">
          <FiFileText className="text-xl text-green-600" />
          <input
            className="input input-bordered w-full focus:ring-green-500"
            required
            type="text"
            defaultValue={campaignType}
            placeholder="Campaign Type (Personal, Startup, Business)"
            name="campaignType"
          />
        </div>

        <div className="flex items-center gap-3">
          <FiFileText className="text-xl text-green-600" />
          <textarea
            className="textarea textarea-bordered w-full focus:ring-green-500"
            rows="4"
            required
            defaultValue={description}
            placeholder="Description"
            name="description"
          ></textarea>
        </div>

        <div className="flex items-center gap-3">
          <FiDollarSign className="text-xl text-green-600" />
          <input
            className="input input-bordered w-full focus:ring-green-500"
            required
            type="number"
            defaultValue={donationAmount}
            placeholder="Minimum Donation Amount"
            name="donationAmount"
          />
        </div>

        <div className="flex items-center gap-3">
          <FiCalendar className="text-xl text-green-600" />
          <input
            className="input input-bordered w-full focus:ring-green-500"
            required
            type="date"
            defaultValue={date}
            name="date"
          />
        </div>

        <div className="flex items-center gap-3">
          <FiMail className="text-xl text-green-600" />
          <input
            className="input input-bordered w-full focus:ring-green-500"
            type="email"
            value={user?.email}
            readOnly
            name="email"
          />
        </div>

        <div className="flex items-center gap-3">
          <FiUser className="text-xl text-green-600" />
          <input
            className="input input-bordered w-full focus:ring-green-500"
            type="text"
            value={user?.displayName}
            readOnly
            name="name"
          />
        </div>

        <div>
          <button className="btn bg-green-600 text-white w-full hover:bg-green-700 focus:ring-green-500 transition duration-300">
            Update Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCampaign;
