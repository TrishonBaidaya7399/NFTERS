// import PropTypes from 'prop-types';

import TransparentTabs from "./TransparentTabs";

const DiscoverNFT = () => {
    return (
        <div className="px-4 lg:px-[130px] pt-12 drop-shadow-lg bg-base-200">
            <h1 className="text-3xl font-extrabold text-left">
            Discover more NFTs
            </h1>
            <TransparentTabs/>
        </div>
    );
};

DiscoverNFT.propTypes = {
    
};

export default DiscoverNFT;