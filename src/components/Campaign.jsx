import React from "react";
import { Link } from "react-router-dom";

const Campaign = ({ campaign }) => {
  const {
    _id,
    thumnailUrl,
    campaignTitle,
    campaignType,
    description,
    donationAmount,
    date,
  } = campaign;

  const currentDate = new Date();
  const deadlineDate = new Date(date);
  const isActive = currentDate < deadlineDate;

  return (
    <div className="card  dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      {/* Thumbnail */}
      <figure className="h-40">
        <img
          src={thumnailUrl || "https://via.placeholder.com/400x200"}
          alt={campaignTitle}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Card Content */}
      <div className="card-body p-4">
        {/* Campaign Title */}
        <h2 className="text-lg font-bold">
          {campaignTitle}
        </h2>

        {/* Description */}
        <p className="text-sm  mb-3">
          {description}
        </p>

        {/* Campaign Info */}
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="text-blue-500 py-1 px-2">{campaignType}</span>
          <span>
            Min Donation:{" "}
            <span className="font-semibold text-green-700 dark:text-green-400">
              BDT {donationAmount}
            </span>
          </span>
        </div>

        {/* Status & Deadline */}
        <div className="text-xs  mb-2">
          Deadline: {deadlineDate.toLocaleDateString()}
        </div>
        <div
          className={`text-xs font-semibold ${
            isActive
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {isActive ? "Active" : "Inactive"}
        </div>

        {/* Action Button */}
        <div className="card-actions justify-end mt-3">
          <Link
            to={`/campaigns/${_id}`}
            className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
