import PropTypes from 'prop-types'
import { RiDeleteBin5Line } from "react-icons/ri";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SelectedAll = ({ player, deletePlayer }) => {
    const { name, image, role, biddingPrice } = player

    // Player Removed
    const playerRemovedNotify = () => toast.error('Player is removed', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });

    const handleClick = () => {
        deletePlayer(player)
        playerRemovedNotify()
    }
    return (

        <div className='border-2 border-gray-400 rounded-2xl px-4 py-3 flex items-center justify-between'>
            <div className='flex gap-8 items-center'>
                <div>
                    <img className='w-[150px] h-[100px] rounded-2xl' src={image} alt="" />
                </div>
                <div >
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <p className='text-xl font-medium mt-3'>{role}</p>
                </div>

            </div>
            <div>
                <h1 className='text-lg font-bold'>Price : ${biddingPrice}</h1>
            </div>
            <div>
                <button onClick={handleClick} className='text-4xl text-red-600'><RiDeleteBin5Line /></button>
            </div>

        </div>

    );
};

SelectedAll.propTypes = {
    player: PropTypes.array,
    deletePlayer: PropTypes.func
}

export default SelectedAll;