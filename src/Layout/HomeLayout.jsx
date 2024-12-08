
import BannerSlider from '../components/BannerSlider';
import ActiveCampaigns from '../components/ActiveCampaigns';
import Testimonials from '../components/Testimonials';
import CampaignCategories from '../components/CampaignCategory';

const HomeLayout = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <ActiveCampaigns></ActiveCampaigns>
            <CampaignCategories></CampaignCategories>
            <Testimonials></Testimonials>
        </div>
    );
};

export default HomeLayout;