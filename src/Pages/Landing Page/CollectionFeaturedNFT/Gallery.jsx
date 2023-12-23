import PropTypes from 'prop-types';

const Gallery = ({userImg, bg1, bg3, bg4, bg2}) => {
    return (
        <div className="flex flex-col gap-2">
            <div className=" max-h-[300px] flex flex-row gap-2">
            <div className="w-[75%]">
                <img src={bg1} className=" rounded-lg w-[400px] h-[258px]" alt="" />
            </div>
            <div className="w-[25%] flex flex-col gap-2">
                <img src={bg3} className=" rounded-lg h-[80px]" alt="" />
                <img src={bg4} className=" rounded-lg h-[80px]" alt="" />
                <img src={bg2} className=" rounded-lg h-[80px]" alt="" />
            </div>
            </div>
            <div className=" flex flex-row justify-between items-center">
                <div className="flex-col">
                    <h1 className="text-lg font-bold">Amazing Collection</h1>
                    <div className="flex gap-3">
                        <img src={userImg} className="w-8 h-8 rounded-full" alt="" />
                        <p className="text-sm font-semibold">by Arkhan</p>
                    </div>
                </div>
                <button className="w-fit h-8 text-xs font-semibold px-2 py-1 rounded-full bg-[transparent] duration-300 hover:bg-[#3a0ca3] border-2 border-[#3a0ca3] text-[#3a0ca3] hover:text-white font-semibold">
                  Total 54 items
                </button>

            </div>
            
        </div>
    );
};

Gallery.propTypes = {
    userImg: PropTypes.string,
     bg1: PropTypes.string,
     bg3: PropTypes.string,
     bg4: PropTypes.string,
     bg2: PropTypes.string

};

export default Gallery;