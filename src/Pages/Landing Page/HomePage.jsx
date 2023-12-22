// import PropTypes from 'prop-types';

import { useEffect } from "react";
import Banner from "./Banner";
import Collections from "./CollectionFeaturedNFT/Collections";
import Stats from "./Stats";
import TopCollections from "./TopCollections";
import Aos from "aos";

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
        </div>
    );
};

HomePage.propTypes = {
    
};

export default HomePage;