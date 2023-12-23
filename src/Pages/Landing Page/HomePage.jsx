// import PropTypes from 'prop-types';

import { useEffect } from "react";
import Banner from "./Banner";
import Collections from "./CollectionFeaturedNFT/Collections";
import Stats from "./Stats";
import TopCollections from "./TopCollections";
import Aos from "aos";
import SellYourNFT from "./SellYourNFT";
import DiscoverNFT from "./DiscoverNFT/DiscoverNFT";
import Card from "./DiscoverNFT/Card";

const HomePage = () => {
    useEffect(() => {
        Aos.init({
          duration: 1500, // Specify the animation duration
          easing: 'ease-out-cubic', // Specify the easing function
        });
      }, []);
    return (
        <div className="overflow-x-hidden">
            <Banner/>
            <Stats/>
            <TopCollections/>
            <Collections/>
            <SellYourNFT/>
            <DiscoverNFT/>
            <Card/>
        </div>
    );
};

HomePage.propTypes = {
    
};

export default HomePage;