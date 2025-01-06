import React from "react";

const Donation = ({ donation }) => {
  const {
    campaignTitle,
    campaignType,
    description,
    donationAmount,
    name,
    thumnailUrl,
    date,
  } = donation;

  return (
    <div className="relative group">
      {/* Card Shadow and Border */}
      <div className="card w-full bg-gradient-to-br from-green-100 to-green-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-3xl border border-green-200 dark:border-gray-700">
        {/* Thumbnail with Overlay */}
        <figure className="relative h-56">
          <img
            src={thumnailUrl || "https://via.placeholder.com/400x200"}
            alt={campaignTitle}
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity"></div>
          <div className="absolute bottom-4 left-4 text-white font-semibold text-sm bg-green-500 px-3 py-1 rounded-full shadow-md">
            {campaignType}
          </div>
        </figure>

        {/* Card Body */}
        <div className="p-5">
          <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-3 group-hover:text-green-600">
            {campaignTitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {description}
          </p>

          {/* Donation Info */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Donor:{" "}
                <span className="font-bold text-green-600 dark:text-green-300">
                  {name}
                </span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Donated on:{" "}
                <span className="text-green-600 dark:text-green-300">
                  {new Date(date).toLocaleDateString()}
                </span>
              </p>
            </div>
            <div className="text-right">
              <span className="block font-bold text-lg text-green-700 dark:text-green-400">
                BDT {donationAmount}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Donation Amount
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <button className="btn btn-sm text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition">
              Share
            </button>
            <button className="btn btn-sm text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
