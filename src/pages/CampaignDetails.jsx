import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const CampaignDetails = () => {
  const campaign = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    campaignTitle,
    campaignType,
    description,
    donationAmount,
    email,
    name,
    thumnailUrl,
    date,
  } = campaign;

  const donated = {
    campaignTitle,
    campaignType,
    description,
    donationAmount,
    email: user.email,
    name: user.displayName,
    thumnailUrl,
    date,
  };

  const handleDonate = () => {
    fetch("https://crowdcube-server-wheat.vercel.app/myDonations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(donated),
    }).then((data) => {
      if (data.status === 200) {
        Swal.fire({
          title: "Congratulations!",
          html: "You Made Donation Successfully.",
          icon: "success",
          timer: 4000,
          timerProgressBar: true,
        });
      }
    });
  };

  return (
    <div className="container mx-auto p-6 md:p-12">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
        <figure className="relative h-64 md:h-96">
          <img
            src={
              thumnailUrl ||
              "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            }
            alt={campaignTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-4 left-4">
            <span className="badge bg-green-600 text-white px-4 py-2">
              {campaignType}
            </span>
          </div>
        </figure>

        <div className="p-8 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600">
            {campaignTitle}
          </h1>

          <p className="text-gray-600 leading-relaxed">{description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-gray-700">
                <span className="text-green-600">Organizer:</span> {name}
              </p>
              <p className="font-semibold text-gray-700">
                <span className="text-green-600">Email:</span> {email}
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">
                <span className="text-green-600">Minimum Donation:</span> BDT{" "}
                {donationAmount}
              </p>
              <p className="font-semibold text-gray-700">
                <span className="text-green-600">Deadline:</span>{" "}
                {new Date(date).toLocaleDateString()}{" "}
                {new Date() > new Date(date) ? (
                  <span className="text-red-700">Deadline End</span>
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={handleDonate}
              className="btn bg-green-600 text-white hover:bg-green-700 px-8 py-3 rounded-full focus:ring-green-500 transition duration-300"
            >
              Donate Now
            </button>
            <p className="mt-5 text-yellow-600">
              {new Date() > new Date(date)
                ? " Warning: This Campaign is Inactive"
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
