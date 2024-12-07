import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const UpdateCampaign = () => {
    const campaign = useLoaderData()
    const {user} = useContext(AuthContext)

    const {
        _id,
        thumnailUrl,
        campaignTitle,
        campaignType,
        description,
        donationAmount,
        date,
        email,
        name,
      } = campaign;

    const handleUpdateCampaign = (event) => {
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
    
        fetch('http://localhost:5000/campaigns',{
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(campaign)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          form.reset()
        })
      }


    return (
        <div className="text-center">
      <div className="my-10">
        <h2 className="font-bold text-3xl pb-2">Update Campaigns</h2>
        <p>You can update campaign.</p>
      </div>
      <form onSubmit={handleUpdateCampaign}>
      <label className="input input-bordered flex items-center gap-5">
            <input className="w-3/6 py-2 px-3" required type="url" defaultValue={thumnailUrl} placeholder="Thumnail Url" name="thumnailUrl" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" required type="text" placeholder="Campaign Title" defaultValue={campaignTitle} name="campaignTitle" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" required type="text" defaultValue={campaignType} placeholder="Campaign Type (Personal, Startup, Bussiness)" name="campaignType" />
          </label>
          <label>
            <textarea rows="4" cols="50" className="w-full py-2 px-3 border-2" required type="text" defaultValue={description} placeholder="Description" name="description" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" required type="number" defaultValue={donationAmount} placeholder="Minimum Donation Amount" name="donationAmount" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" required type="date" defaultValue={date} name="date" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" required type="email" value={user?.email} readOnly name="email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input className="w-3/6 py-2 px-3" required type="email" value={user?.displayName} readOnly name="name" />
          </label>
          <input className="btn w-full" type="submit" value="Update Campaign"/>
      </form>
    </div>
    );
};

export default UpdateCampaign;