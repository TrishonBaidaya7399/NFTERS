// import PropTypes from 'prop-types';
import badgeImg from "../../assets/Images/others/badge.png"
import CardSlide from "../../Components/CardSlide/CardSlide";

const Banner = () => {
  return (
    <div className="px-4 lg:px-[130px]">
      <div className=" py-12 md:py-[80px]">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="slider-part md:w-2/5 relative " data-aos="fade-left">
            <CardSlide/>
            <img src={badgeImg} className="absolute rounded-full w-[100px] h-[100px] bg-yellow-600 top-[50%] right-[70%] z-10"></img>
          </div>
          <div className="md:w-3/5 flex flex-col mt-4 md:mt-0">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold flex flex-col">
              <p>DISCOVER, AND COLLECT</p>
              <p>DIGITAL ART NFTS</p>
            </h1>
            <p className="py-3 md:py-6 text-gray-500 font-semibold">
              Digital marketplace for crypto collectibles and <br />{" "}
              non-fungible tokens (NFTs). Buy, sell, and discover <br />{" "}
              exclusive digital assets
            </p>
            <button className="w-fit text-white text-sm lg:text-md font-semibold px-6 py-2 rounded-full bg-[#3a0ca3]">
              Explore Now
            </button>
          <div className="stats flex flex-row gap-6 mt-4 md:mt-12">
            <div className="flex flex-col">
                <h1 className="text-2xl md:text-4xl font-bold text-black">98K+</h1>
                <p className="text-sm md:text-xl font-semibold text-gray-500">Artwork</p>
            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl md:text-4xl font-bold text-black">12K+</h1>
                <p className="text-sm md:text-xl font-semibold text-gray-500">Auction</p>
            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl md:text-4xl font-bold text-black">15K+</h1>
                <p className="text-sm md:text-xl font-semibold text-gray-500">Artist</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
