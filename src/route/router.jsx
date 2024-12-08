import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import AddNewCampaign from "../pages/AddNewCampaign";
import PrivateRoute from "./privateRoute";
import AllCampaign from "../pages/AllCampaign";
import MyCampaigns from "../pages/MyCampaigns";
import CampaignDetals from "../pages/CampaignDetails";
import UpdateCampaign from "../pages/UpdateCampaign";
import HomeLayout from "../Layout/HomeLayout";
import MyDonations from "../pages/MyDonations";


const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>
            },
            {
                path:'/signUp',
                element: <SignUp></SignUp>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/addNewCampaign',
                element: <PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>
            },
            {
                path: '/campaigns',
                element: <AllCampaign></AllCampaign>,
                loader: () => fetch('http://localhost:5000/campaigns')
            },
            {
                path: '/myCampaigns',
                element: <MyCampaigns></MyCampaigns>,
                loader: () => fetch('http://localhost:5000/campaigns')
            },
            {
                path: '/campaigns/:id',
                element: <PrivateRoute><CampaignDetals></CampaignDetals></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.id}`)
            },
            {
                path: '/updateCampaign/:id',
                element: <UpdateCampaign></UpdateCampaign>,
                loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.id}`)
                
            },
            {
                path: '/myDonations',
                element: <PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/myDonations')
            }
        ]
    }
])

export default router;