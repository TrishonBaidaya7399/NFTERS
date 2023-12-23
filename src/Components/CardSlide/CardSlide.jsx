// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import userImg from "../../assets/Images/card bg/user.jpg"


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";
import { FaEthereum } from "react-icons/fa6";

export default function CardSlide() {
  return (
    <>
      <Swiper
      data-aos="fade-left"
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col gap-[140px] p-4">
            <div className="flex flex-col">
                <h1 className="text-md">Abstr Gradient NFT</h1>
                <div className="flex gap-2 items-center">
                    <img src={userImg} className="w-8 h-8 rounded-full" alt="" />
                    <p className="text-xs">ArKhan17</p>
                </div>
            </div>
            <div className="bg-white rounded-lg bg-opacity-30 text-white p-2 flex flex-row justify-between">
                <div className="flex flex-col">
                    <p className="text-xs">Current Bid</p>
                    <p className="text-sm flex items-center"><FaEthereum/>0.25 ETH</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-xs">End in</p>
                    <p className="text-sm">12h 43m 42s</p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-[140px] p-4">
            <div className="flex flex-col">
                <h1 className="text-md">Abstr Gradient NFT</h1>
                <div className="flex gap-2 items-center">
                    <img src={userImg} className="w-8 h-8 rounded-full" alt="" />
                    <p className="text-xs">ArKhan17</p>
                </div>
            </div>
            <div className="bg-white rounded-lg bg-opacity-30 text-white p-2 flex flex-row justify-between">
                <div className="flex flex-col">
                    <p className="text-xs">Current Bid</p>
                    <p className="text-sm flex items-center"><FaEthereum/>0.25 ETH</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-xs">End in</p>
                    <p className="text-sm">12h 43m 42s</p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-[140px] p-4">
            <div className="flex flex-col">
                <h1 className="text-md">Abstr Gradient NFT</h1>
                <div className="flex gap-2 items-center">
                    <img src={userImg} className="w-8 h-8 rounded-full" alt="" />
                    <p className="text-xs">ArKhan17</p>
                </div>
            </div>
            <div className="bg-white rounded-lg bg-opacity-30 text-white p-2 flex flex-row justify-between">
                <div className="flex flex-col">
                    <p className="text-xs">Current Bid</p>
                    <p className="text-sm flex items-center"><FaEthereum/>0.25 ETH</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-xs">End in</p>
                    <p className="text-sm">12h 43m 42s</p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-[140px] p-4">
            <div className="flex flex-col">
                <h1 className="text-md">Abstr Gradient NFT</h1>
                <div className="flex gap-2 items-center">
                    <img src={userImg} className="w-8 h-8 rounded-full" alt="" />
                    <p className="text-xs">ArKhan17</p>
                </div>
            </div>
            <div className="bg-white rounded-lg bg-opacity-30 text-white p-2 flex flex-row justify-between">
                <div className="flex flex-col">
                    <p className="text-xs">Current Bid</p>
                    <p className="text-sm flex items-center"><FaEthereum/>0.25 ETH</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-xs">End in</p>
                    <p className="text-sm">12h 43m 42s</p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-[140px] p-4">
            <div className="flex flex-col">
                <h1 className="text-md">Abstr Gradient NFT</h1>
                <div className="flex gap-2 items-center">
                    <img src={userImg} className="w-8 h-8 rounded-full" alt="" />
                    <p className="text-xs">ArKhan17</p>
                </div>
            </div>
            <div className="bg-white rounded-lg bg-opacity-30 text-white p-2 flex flex-row justify-between">
                <div className="flex flex-col">
                    <p className="text-xs">Current Bid</p>
                    <p className="text-sm flex items-center"><FaEthereum/>0.25 ETH</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-xs">End in</p>
                    <p className="text-sm">12h 43m 42s</p>
                </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
