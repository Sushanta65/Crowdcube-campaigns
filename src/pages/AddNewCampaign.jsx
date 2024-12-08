import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FiImage, FiType, FiDollarSign, FiCalendar, FiMail, FiUser, FiFileText } from "react-icons/fi";
import Swal from "sweetalert2";

const AddNewCampaign = () => {
  const { user } = useContext(AuthContext);

  const handleAddCampaign = (event) => {
    event.preventDefault();

    const form = event.target;
    const thumnailUrl = form.thumnailUrl.value;
    const campaignTitle = form.campaignTitle.value;
    const campaignType = form.campaignType.value;
    const description = form.description.value;
    const date = form.date.value;
    const donationAmount = form.donationAmount.value;
    const email = form.email.value;
    const name = form.name.value;

    const campaign = {
      thumnailUrl,
      campaignTitle,
      campaignType,
      description,
      donationAmount,
      date,
      email,
      name,
    };
    console.log(campaign);

    fetch("http://localhost:5000/campaigns", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(campaign),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        Swal.fire({
          position: "middle-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl pb-2">Add New Campaign</h2>
        <p className="text-gray-500 dark:text-gray-400">You can add a new campaign to help others.</p>
      </div>

      <form onSubmit={handleAddCampaign} className="space-y-6 bg-base-100 p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-3">
          <FiImage className="text-xl text-primary" />
          <input
            className="input input-bordered w-full"
            required
            type="url"
            placeholder="Thumbnail URL"
            name="thumnailUrl"
          />
        </div>

        <div className="flex items-center gap-3">
          <FiType className="text-xl text-primary" />
          <input
            className="input input-bordered w-full"
            required
            type="text"
            placeholder="Campaign Title"
            name="campaignTitle"
          />
        </div>

        <div className="flex items-center gap-3">
          <FiFileText className="text-xl text-primary" />
          <input
            className="input input-bordered w-full"
            required
            type="text"
            placeholder="Campaign Type (Personal, Startup, Business)"
            name="campaignType"
          />
        </div>

        <div className="flex items-center gap-3">
          <FiFileText className="text-xl text-primary" />
          <textarea
            className="textarea textarea-bordered w-full"
            required
            placeholder="Description"
            name="description"
          ></textarea>
        </div>

        <div className="flex items-center gap-3">
          <FiDollarSign className="text-xl text-primary" />
          <input
            className="input input-bordered w-full"
            required
            type="number"
            placeholder="Minimum Donation Amount"
            name="donationAmount"
          />
        </div>

        <div className="flex items-center gap-3">
          <FiCalendar className="text-xl text-primary" />
          <input
            className="input input-bordered w-full"
            required
            type="date"
            name="date"
          />
        </div>

        <div className="flex items-center gap-3">
          <FiMail className="text-xl text-primary" />
          <input
            className="input input-bordered w-full"
            required
            type="email"
            value={user?.email}
            readOnly
            name="email"
          />
        </div>

        <div className="flex items-center gap-3">
          <FiUser className="text-xl text-primary" />
          <input
            className="input input-bordered w-full"
            required
            type="text"
            value={user?.displayName}
            readOnly
            name="name"
          />
        </div>

        <div>
          <button className="btn btn-primary w-full" type="submit">
            Add Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewCampaign;
