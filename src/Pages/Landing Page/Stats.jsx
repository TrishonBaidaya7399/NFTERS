// import PropTypes from 'prop-types';
import { VscFolderActive } from "react-icons/vsc";
import { BiBarChartSquare } from "react-icons/bi";

const Stats = () => {
    return (
        <div className="bg-base-200 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center px-4 lg:px-[130px]">
            <div className="text-2xl text-black font-bold">
                <p>THE AMAZING NFT ART PF THE WORLD HERE</p>
             
            </div>
            <div className="">
                <p className="flex items-center gap-1 text-lg font-bold"><VscFolderActive />Fast Transaction</p>
                <p className="text-xs w-3/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
            </div>
            <div className="">
                <p className="flex items-center gap-1 text-lg font-bold"><BiBarChartSquare />Growth Transaction</p>
                <p className="text-xs w-3/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus</p>
            </div>
        </div>
    );
};

Stats.propTypes = {
    
};

export default Stats;