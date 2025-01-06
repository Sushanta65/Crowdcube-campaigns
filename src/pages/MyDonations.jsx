import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Donation from "../components/Donation";

const MyDonations = () => {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("https://crowdcube-server-wheat.vercel.app/myDonations")
      .then((res) => res.json())
      .then((data) => {
        setDonations(
          data.filter((donation) => donation.email === user?.email)
        );
      });
  }, [user?.email]);

  return (
    <div className="mb-10 mt-36 w-4/5 mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-bold text-3xl pb-2 text-green-600 dark:text-green-400">
          My Donations
        </h2>
        <h2 className="text-green-500 dark:text-green-300">
          {donations.length
            ? `You have made ${donations.length} donations.`
            : "You haven't donated yet!"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          View and track your contributions here.
        </p>
      </div>

      <div>
        {donations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {donations.map((donation) => (
              <Donation key={donation._id} donation={donation}></Donation>
            ))}
          </div>
        ) : (
          <div className="text-center text-green-600">
            <p>No donations found. Start donating to make a difference!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDonations;
