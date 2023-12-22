// import PropTypes from 'prop-types';
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer px-4 lg:px-[130px] py-10 lg:py-[100px] text-base-content grid grid-cols-1 lg:grid-cols-3">
        <div>
          <aside>
            <p className="text-2xl font-extrabold">NFTERS</p>
            <p className="text-gray-500 font-semibold py-4">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
            <div className="socialLinks flex gap-4 w-full">
            <FaFacebook className="text-3xl text-blue-800"/>
            <AiFillTwitterCircle className="text-3xl text-blue-400"/>
            <div className="rounded-full w-[28px] h-[28px] p-1 bg-blue-600 flex items-center justify-center">
            <FaLinkedinIn className="text-white text-sm"/>
            </div>
            </div>
          </aside>
        </div>
        <div className="flex flex-row justify-between lg:gap-12">
          <nav className="lg:ml-12">
            <header className="footer-title flex flex-col text-black font-bold">Market Place</header>
            <p>
              <a className="link link-hover text-gray-400 font-semibold">All NFTs</a>
            </p>
            <p>
              <a className="link link-hover text-gray-400 font-semibold">New</a>
            </p>
            <p>
              <a className="link link-hover text-gray-400 font-semibold">Art</a>
            </p>

            <p>
              <a className="link link-hover text-gray-400 font-semibold">Sports</a>
            </p>
            <p>
              <a className="link link-hover text-gray-400 font-semibold">Utility</a>
            </p>
            <p>
              <a className="link link-hover text-gray-400 font-semibold">Music</a>
            </p>
            <p>
              <a className="link link-hover text-gray-400 font-semibold">Domain Name</a>
            </p>
          </nav>
          <nav className="lg:mr-12">
            <header className="footer-title flex flex-col text-black font-bold">My Account</header>
            <p>
              <a className="link link-hover text-gray-400 font-semibold">Profile</a>
            </p>
            <p>
              <a className="link link-hover text-gray-400 font-semibold">Favorite</a>
            </p>
            <p>
              <a className="link link-hover text-gray-400 font-semibold">My Collections</a>
            </p>
            <p>
              <a className="link link-hover text-gray-400 font-semibold">Settings</a>
            </p>
          </nav>
        </div>
        <div>
          <nav>
            <header className="footer-title text-black font-bold">Stay in the loop</header>
            <p className="text-gray-500 font-semibold pb-4">
            Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.
            </p>
            <div className="join relative">
              <input
                type="text"
                placeholder="Enter your email"
                className="h-12 w-[280px] lg:w-[320px] rounded-full border-2 border-gray-300 pl-4"
              />
              <button className="absolute top-1 h-10 right-1 rounded-full bg-blue-600 text-xs text-white font-semibold px-6">Subscribe Now</button>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
