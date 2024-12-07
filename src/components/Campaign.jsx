import React from "react";
import { Link } from "react-router-dom";

const Campaign = ({ campaign, campaigns, setCampaigns }) => {
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


  const currentDate = new Date();
  const deadlineDate = new Date(date);


  const isActive = currentDate < deadlineDate;

  return (
    <div className="card w-full bg-base-100 shadow-xl transition-transform transform hover:scale-105">
      <figure>
        <img
          src={"https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"}
          alt={campaignTitle}
          className="w-full h-48 object-cover rounded-t-xl"
        />
      </figure>
      <div className="card-body p-6 flex flex-col gap-4">
        <h2 className="card-title text-2xl font-semibold">{campaignTitle}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-between items-center">
          <div className="badge badge-info">{campaignType}</div>
          <div className="font-semibold">Min Donation: BDT {donationAmount}</div>
        </div>
        <span>{date}</span>

        <div className="badge badge-secondary mt-4">
            
          {isActive ? "Active" : "Inactive"}
        </div>
        
        <div className="card-actions justify-end mt-4">
          <Link to={`/campaigns/${_id}`} className="btn btn-primary">See More</Link>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
