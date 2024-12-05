import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyCampaigns = () => {
    const {user} = useContext(AuthContext)
    // useEffect(() => {
    //     fetch(`http://localhost:5000/campaigns/${user.email}`)
    //     .then(res => res.json())
    //     .then(data => console.log("data", data))

    // }, [])
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl pb-2">My Campaigns Are Here</h2>
        <p className="text-gray-500">Explore all of the campaigns here.</p>
      </div>
      <div>

      </div>
    </div>
  );
};

export default MyCampaigns;
