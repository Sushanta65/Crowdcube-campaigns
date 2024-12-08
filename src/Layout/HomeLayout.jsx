
import BannerSlider from '../components/BannerSlider';
import ActiveCampaigns from '../components/ActiveCampaigns';
import Testimonials from '../components/Testimonials';

const HomeLayout = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <ActiveCampaigns></ActiveCampaigns>
            <Testimonials></Testimonials>
        </div>
    );
};

export default HomeLayout;