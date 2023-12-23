// import PropTypes from 'prop-types';

import Gallery from "./Gallery";
import userImg from "../../../assets/Images/users/User01 (2).png";
import bg1 from "../../../assets/Images/cards/bg1.png"
import bg2 from "../../../assets/Images/cards/bg00.png"
import bg3 from "../../../assets/Images/cards/bg1.png"
import bg4 from "../../../assets/Images/cards/bg2.png"
import bg5 from "../../../assets/Images/cards/bg3.png"
const Collections = () => {
    return (
        <div className="px-4 lg:px-[130px] py-12 bg-base-200">
            <h1 className="text-3xl font-extrabold text-left mb-12">COLLECTION FEATURED NFTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Gallery userImg={userImg} bg1={bg2} bg2={bg5} bg3={bg3} bg4={bg4}/>
                <Gallery userImg={userImg} bg1={bg1} bg2={bg4} bg3={bg3} bg4={bg2}/>
                <Gallery userImg={userImg} bg1={bg4} bg2={bg2} bg3={bg3} bg4={bg1}/>
            </div>

        </div>
    );
};

Collections.propTypes = {
    
};

export default Collections;