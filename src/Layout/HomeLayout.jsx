import React from 'react';
import BannerSlider from '../components/BannerSlider';
import ActiveCampaigns from '../components/ActiveCampaigns';

const HomeLayout = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <ActiveCampaigns></ActiveCampaigns>
        </div>
    );
};

export default HomeLayout;