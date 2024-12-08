import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Donation from "../components/Donation";

const MyDonations = () => {
    const loadedDonations = useLoaderData()
    const {user} = useContext(AuthContext)
    // console.log(loadedDonations)

    const donations = loadedDonations.filter(donation => donation.email === user.email)
    console.log(donations)
    return (
        <div>


            Donations : {donations.length? `You Donated ${donations.length}` : "You not donated yet!"}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> 
            {
                donations.map(donation => <Donation key={donation._id} donation={donation}></Donation>)
            }
            </div>
        </div>
    );
};

export default MyDonations;