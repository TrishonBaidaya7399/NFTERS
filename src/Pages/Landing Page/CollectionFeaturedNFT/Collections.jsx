// import PropTypes from 'prop-types';

import Gallery from "./Gallery";

const Collections = () => {
    return (
        <div className="px-4 lg:px-[130px] py-12">
            <h1 className="text-3xl font-extrabold text-left mb-12">COLLECTION FEATURED NFTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Gallery/>
                <Gallery/>
                <Gallery/>
            </div>

        </div>
    );
};

Collections.propTypes = {
    
};

export default Collections;