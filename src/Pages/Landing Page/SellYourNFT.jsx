// import PropTypes from 'prop-types';

import user1 from "../../assets/Images/users/User01 (2).png"
import user2 from "../../assets/Images/users/User02.png"
import bg1 from "../../assets/Images/cards/bg1.png"
import bg2 from "../../assets/Images/cards/bg2.png"
import bg3 from "../../assets/Images/cards/bg3.png"
const SellYourNFT = () => {
  return ( 
    <div className="px-4 lg:px-[130px] py-12 drop-shadow-lg">
      <div className="">
        <div className="hero-content flex-col lg:flex-row gap-12 lg:gap-[80px]">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="flex gap-6">
                <div className="w-4/6 flex flex-col gap-6">
                    <div className="w-full relative">
                        <img src={bg1} alt="" />
                        <img src={user1} alt="" className="absolute -bottom-5 -right-5 w-10 md:w-[60px] w-10 md:h-[60px] rounded-full"/>
                    </div>
                    <div className="w-2/4 flex ml-auto relative">
                        <img src={bg3} alt="" className=""/>
                        <img src={user2} alt="" className="absolute -bottom-5 -right-5 w-10 md:w-[60px] w-10 md:h-[60px] rounded-full"/>
                    </div>
                </div>
                <div className="w-3/6">
                    <div className="flex mt-[70%] relative">
                        <img src={bg2} alt="" />
                        <img src={user2} alt="" className="absolute -bottom-5 -right-5 w-10 md:w-[60px] w-10 md:h-[60px] rounded-full"/>
                    </div>
                </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl font-extrabold">Create and<br/> sell your NFTs</h1>
            <p className="py-6 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
            </p>
            <button className="w-fit text-white text-sm lg:text-md font-semibold px-6 py-2 rounded-full bg-[#3a0ca3] border-2 border-[#3a0ca3] hover:text-[#3a0ca3] duration-300 hover:bg-[transparent]">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SellYourNFT.propTypes = {};

export default SellYourNFT;
