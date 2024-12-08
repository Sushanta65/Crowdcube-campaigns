import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Donation from "../components/Donation";

const MyDonations = () => {
  const loadedDonations = useLoaderData();
  const { user } = useContext(AuthContext);

  const donations = loadedDonations.filter(
    (donation) => donation.email === user.email
  );
  
  return (
    <div className="my-10 w-4/5 mx-auto" >
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl pb-2">My Campaigns</h2>
        <h2>{donations.length
          ? `You Total Donations ${donations.length}`
          : "You not donated yet!"}</h2>
        <p className="text-gray-500 dark:text-gray-400">
          View and manage your campaigns here.

        </p>
      </div>

      <div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {donations.map((donation) => (
            <Donation key={donation._id} donation={donation}></Donation>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyDonations;
