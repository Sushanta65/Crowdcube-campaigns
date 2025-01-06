
import BannerSlider from '../components/BannerSlider';
import ActiveCampaigns from '../components/ActiveCampaigns';
import Testimonials from '../components/Testimonials';
import CampaignCategories from '../components/CampaignCategory';
import Promotional from '../components/Promotional';

const HomeLayout = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <ActiveCampaigns></ActiveCampaigns>
            <CampaignCategories></CampaignCategories>
            <Testimonials></Testimonials>
            <Promotional></Promotional>
        </div>
    );
};

export default HomeLayout;