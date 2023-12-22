// import PropTypes from 'prop-types';
import userImg from "../../assets/Images/card bg/user.jpg";
import bg2 from "../../assets/Images/card bg/bg2.jpg";
import bg3 from "../../assets/Images/card bg/bg3.png";
import bg4 from "../../assets/Images/card bg/bg4.jpg";
import bg5 from "../../assets/Images/card bg/bg5.jpg";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaEthereum } from "react-icons/fa6";

const TopCollections = () => {
  return (
    <div className="px-4 lg:px-[130px] py-12">
      <div className="flex flex-col md:flex-row md:gap-6">
        <div className="lg:w-2/3 rounded-lg border-2 border-gray-200 drop-shadow-lg p-4 flex flex-col md:flex-row gap-6">
          <div className="flex flex-col">
            <div className="rounded-lg">
              <img src={bg3} className="rounded-xl w-full h-[300px] lg:h-[350px]" alt="" />
            </div>
            <div className="flex flex-row  md:flex-col lg:flex-row justify-between items-center mt-6">
              <div className="flex gap-3 items-center">
                <img src={userImg} className="w-10 h-10 rounded-full" alt="" />
                <div className="flex flex-col">
                  <h1 className="font-bold">The Futr Abstr</h1>
                  <p className="text-xs text-gray-500 font-semibold">
                    10 in the stock
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-gray-500 font-semibold">
                  Highest Bid
                </p>
                <p className="text-sm font-bold flex items-center"><FaEthereum/>0.25 ETH</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-2">
              <div className="w-2/5">
                <img src={bg2} className="w-[150px] lg:w-[180px] h-[100px] lg:h-[120px] rounded-lg" alt="" />
              </div>
              <div className="w-3/5 flex flex-col gap-3">
                <p className="font-bold text-md">The Futr Abstr</p>
                <div className="flex gap-3 items-center">
                  <img src={userImg} className="w-7 h-7 rounded-full" alt="" />
                  <div className="border-2 border-green-500 font-bold p-1 rounded-lg text-green-400 text-xs flex items-center">
                  <FaEthereum/> 0.25ETH
                  </div>
                  <p className="text-xs font-semibold text-gray-500">1 of 8</p>
                </div>
                <button className="w-fit text-xs font-semibold px-2 py-1 rounded-full bg-[transparent] hover:bg-[#3a0ca3] border-2 border-[#3a0ca3] text-[#3a0ca3] duration-300 hover:text-white font-semibold">
                  Place a Bid
                </button>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="w-2/5">
                <img src={bg4} className="w-[150px] lg:w-[180px] h-[100px] lg:h-[120px] rounded-lg" alt="" />
              </div>
              <div className="w-3/5 flex flex-col gap-3">
                <p className="font-bold text-md">The Futr Abstr</p>
                <div className="flex gap-3 items-center">
                  <img src={userImg} className="w-7 h-7 rounded-full" alt="" />
                  <div className="border-2 border-green-500 font-bold p-1 rounded-lg text-green-400 text-xs flex items-center">
                  <FaEthereum/>0.25ETH
                  </div>
                  <p className="text-xs font-semibold text-gray-500">1 of 8</p>
                </div>
                <button className="w-fit text-xs font-semibold px-2 py-1 rounded-full bg-[transparent] hover:bg-[#3a0ca3] border-2 border-[#3a0ca3] text-[#3a0ca3] duration-300 hover:text-white font-semibold">
                  Place a Bid
                </button>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="w-2/5">
                <img src={bg5} className="w-[150px] lg:w-[180px] h-[100px] lg:h-[120px] rounded-lg" alt="" />
              </div>
              <div className="w-3/5 flex flex-col gap-3">
                <p className="font-bold text-md">The Futr Abstr</p>
                <div className="flex gap-1 items-center">
                  <img src={userImg} className="w-7 h-7 rounded-full" alt="" />
                  <div className="border-2 border-green-500 font-bold p-1 rounded-lg text-green-400 text-xs flex items-center">
                  <FaEthereum/>0.25ETH
                  </div>
                  <p className="text-xs font-semibold text-gray-500">1 of 8</p>
                </div>
                <button className="w-fit text-xs font-semibold px-2 py-1 rounded-full bg-[transparent] hover:bg-[#3a0ca3] border-2 border-[#3a0ca3] text-[#3a0ca3] duration-300 hover:text-white font-semibold">
                  Place a Bid
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 h-fit lg:h-full rounded-lg border-2 border-gray-200 drop-shadow-lg flex flex-col gap-2 p-4">
            <div className="flex flex-col">
                <p className="font-extrabold text-lg">
                    TOP COLLECTIONS OVER
                </p>
                <p className="text-sm font-bold text-[#3a0ca3]">Last 7 days</p>
            </div>
            <div className="flex flex-col mt-4">
                <div className="py-3 border-b-2 border-gray-200 flex flex-row items-center gap-3">
                <p className="text-lg font-bold">1</p>
                <div className="relative">
                    <img src={userImg} alt="" className="w-10 h-10 rounded-full" />
                    <RiVerifiedBadgeFill className="absolute top-0 -right-1 text-blue-500"/>
                </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-bold">CryptoFunks</p>
                        <p className="gray-500 text-xs font-semibold">19,769.39</p>
                    </div>
                    <p className="text-cyan-300 text-lg font-bold">+26.52%</p>
                </div>
                <div className="py-3 border-b-2 border-gray-200 flex flex-row items-center gap-3">
                <p className="text-lg font-bold">2</p>
                <div className="relative">
                    <img src={userImg} alt="" className="w-10 h-10 rounded-full" />
                    {/* <RiVerifiedBadgeFill className="absolute top-0 -right-1 text-blue-500"/> */}
                </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-bold">CryptoFunks</p>
                        <p className="gray-500 text-xs font-semibold">19,769.39</p>
                    </div>
                    <p className="text-red-400 text-lg font-bold">+26.52%</p>
                </div>
                <div className="py-3 border-b-2 border-gray-200 flex flex-row items-center gap-3">
                <p className="text-lg font-bold">3</p>
                <div className="relative">
                    <img src={userImg} alt="" className="w-10 h-10 rounded-full" />
                    {/* <RiVerifiedBadgeFill className="absolute top-0 -right-1 text-blue-500"/> */}
                </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-bold">CryptoFunks</p>
                        <p className="gray-500 text-xs font-semibold">19,769.39</p>
                    </div>
                    <p className="text-cyan-300 text-lg font-bold">+26.52%</p>
                </div>
                <div className="py-3 border-b-2 border-gray-200 flex flex-row items-center gap-3">
                <p className="text-lg font-bold">4</p>
                <div className="relative">
                    <img src={userImg} alt="" className="w-10 h-10 rounded-full" />
                    <RiVerifiedBadgeFill className="absolute top-0 -right-1 text-blue-500"/>
                </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-bold">CryptoFunks</p>
                        <p className="gray-500 text-xs font-semibold">19,769.39</p>
                    </div>
                    <p className="text-cyan-300 text-lg font-bold">+26.52%</p>
                </div>
                <div className="py-3 flex flex-row items-center gap-3">
                <p className="text-lg font-bold">5</p>
                <div className="relative">
                    <img src={userImg} alt="" className="w-10 h-10 rounded-full" />
                    {/* <RiVerifiedBadgeFill className="absolute top-0 -right-1 text-blue-500"/> */}
                </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-bold">CryptoFunks</p>
                        <p className="gray-500 text-xs font-semibold">19,769.39</p>
                    </div>
                    <p className="text-red-400 text-lg font-bold">+26.52%</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

TopCollections.propTypes = {};

export default TopCollections;
