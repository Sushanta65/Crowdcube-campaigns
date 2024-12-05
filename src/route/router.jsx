import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import AddNewCampaign from "../pages/AddNewCampaign";
import PrivateRoute from "./privateRoute";
import AllCampaign from "../pages/AllCampaign";
import MyCampaigns from "../pages/MyCampaigns";


const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children: [
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
            }
        ]
    }
])

export default router;