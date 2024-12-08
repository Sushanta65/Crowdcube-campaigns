import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const MyDonations = () => {
    const loadedDonations = useLoaderData()
    const {user} = useContext(AuthContext)
    // console.log(loadedDonations)

    const donations = loadedDonations.filter(donation => donation.email === user.email)
    console.log(donations)
    return (
        <div>
            Donations : {donations.length? `You Donated ${donations.length}` : "You not donated yet!"}
        </div>
    );
};

export default MyDonations;