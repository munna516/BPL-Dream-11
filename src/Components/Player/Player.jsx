import PropTypes from 'prop-types'
import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa";

const Player = ({ player, selectPlayer }) => {
    const { image, name, country, role, bowlingType, biddingPrice, battingType } = player
    return (
        <div className='border border-gray-300 rounded-2xl p-6'>
            <div className='flex  justify-center'>
                <img className='rounded-2xl w-full h-[250px]' src={image} alt="" />
            </div>
            <div className='mt-7 '>
                <p className='text-2xl font-bold flex gap-5 items-center'><CgProfile /> {name}</p>
                <p className='flex  justify-between  items-center mt-5'>
                    <p className='flex items-center text-xl text-gray-400 gap-4 '><FaFlag /> {country}</p>
                    <p className='text-xl'>{role}</p>
                </p>
                <p className='border-b-2 border-gray-300 mt-8 mb-8'></p>
                <p className='font-bold text-xl'>Rating</p>
                <div className='flex justify-between items-center mt-3 mb-3 font-bold'>
                    <p>{bowlingType}</p>
                    <p>{battingType}</p>
                </div>
                <div className='flex justify-between items-center font-bold'>
                    <p>Price: ${biddingPrice}</p>
                    <button onClick={() => selectPlayer(player)} className='btn border-2 border-green-400 hover:bg-green-300 hover:border-none'>
                        Choose Player
                    </button>
                </div>
            </div>
        </div>
    );
};
Player.propTypes = {
    player: PropTypes.object,
    selectPlayer: PropTypes.func
}
export default Player;