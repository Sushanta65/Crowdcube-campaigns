import React from "react";

const Donation = ({ donation }) => {
  const {
    campaignTitle,
    campaignType,
    description,
    donationAmount,
    email,
    name,
    thumnailUrl,
    date,
  } = donation;

  return (
    <div className="card w-full bg-base-100 shadow-lg transition-transform transform hover:scale-105">
      <figure className="h-48 overflow-hidden">
        <img
          src={thumnailUrl || "https://via.placeholder.com/400x200"}
          alt={campaignTitle}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-xl font-semibold">{campaignTitle}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
          {description}
        </p>
        <div className="flex justify-between items-center mb-2">
          <span className="badge badge-info">{campaignType}</span>
          <span className="font-medium">
            Donation Amount: <span className="font-bold">BDT {donationAmount}</span>
          </span>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Donor: {name}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Donated on: {new Date(date).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default Donation;
