import PropTypes from 'prop-types';
import { FaEthereum } from "react-icons/fa6";

const Card = ({ card }) => {
  if (!card) {
    return <div></div>;
  }

  const {
    bgImg,
    userImg1,
    userImg2,
    userImg3,
    userImg4,
    title,
    eth,
    time,
  } = card;

  return (
    <div className="drop-shadow-lg rounded-lgp-2 flex flex-col gap-4 bg-white p-2 rounded-xl">
      <div className="relative">
        <img src={bgImg} alt={title} className="h-[200px] w-full" />
        <div className="avaters">
          <img
            src={userImg1}
            className="absolute w-8 h-8 rounded-full -bottom-4 left-4"
            alt={`${title} User 1`}
          />
          <img
            src={userImg2}
            className="absolute w-8 h-8 rounded-full -bottom-4 left-10"
            alt={`${title} User 2`}
          />
          <img
            src={userImg3}
            className="absolute w-8 h-8 rounded-full -bottom-4 left-[56px]"
            alt={`${title} User 3`}
          />
          <img
            src={userImg4}
            className="absolute w-8 h-8 rounded-full -bottom-4 left-[80px]"
            alt={`${title} User 4`}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-extrabold text-md">{title}</h1>
        <div className="flex flex-row justify-between">
          <div className="border-2 border-green-500 font-bold p-1 rounded-lg text-green-400 text-xs flex items-center">
            <FaEthereum />
            {eth} ETH
          </div>
          <p className="text-sm text-gray-500 font-semibold">1 of 321</p>
        </div>
        <div className="flex flex-row justify-between py-2 border-t-2 border-gray-300">
          <div className="rounded-full p-2 text-xs font-semibold bg-[#3D00B7] bg-opacity-20 text-[#3D00B7]">
            {time} left
          </div>
          <p className="text-md font-semibold text-[#3D00B7]">Place a bid</p>
        </div>
      </div>
    </div>
  );
};

export default Card;



Card.propTypes = {
   card: PropTypes.node 
};


