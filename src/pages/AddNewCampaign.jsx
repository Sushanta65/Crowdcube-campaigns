import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddNewCampaign = () => {

const {user} = useContext(AuthContext)
// image/thumbnail ( use image URL)
// Campaign title(string) 
// Campaign type ( personal issue, startup, business, creative ideas) you can take it as a dropdown list. 
// description
// Minimum donation amount (number) 
// Deadline (Date) 
// User Email  (Read Only/ you can not edit this field) 
// User Name  (Read Only/ you can not edit this field) 
// “Add” button

  const handleAddCampaign = (event) => {
    event.preventDefault()

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
      name
    }
    console.log(campaign)
  }

  return (
    <div className="text-center">
      <div className="my-10">
        <h2 className="font-bold text-3xl pb-2">Add New Campaigns</h2>
        <p>You can add more new campaign.</p>
      </div>
      <form onSubmit={handleAddCampaign}>
      <label className="input input-bordered flex items-center gap-5">
            <input className="w-3/6 py-2 px-3" type="url" placeholder="Thumnail Url" name="thumnailUrl" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" type="text" placeholder="Campaign Title" name="campaignTitle" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" type="text" placeholder="Campaign Type (Personal, Startup, Bussiness)" name="campaignType" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" type="text" placeholder="Description" name="description" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" type="number" placeholder="Minimum Donation Amount" name="donationAmount" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" type="date" name="date" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" type="email" value={user?.email} readOnly name="email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" type="email" value={user?.displayName} readOnly name="name" />
          </label>
          <input className="btn w-full" type="submit" value="Add Campaign"/>
      </form>
    </div>
  );
};

export default AddNewCampaign;
