import logo from '../../assets/images/logo.png'
import banner from '../../assets/images/banner-main.png'
import './Header.css'
import PropTypes from "prop-types"
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsCoin } from "react-icons/bs";


const Header = ({ handleCoin, coins }) => {

    const creditAddedNotify = () => toast.success('Free Credit Claimed', {
        position: "top-center",
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
        handleCoin()
        creditAddedNotify()
    }
    return (
        <div className="w-11/12 mx-auto ">
            {/* Nav  Styles */}
            <nav className="flex justify-between mt-10 items-center fixed w-11/12  top-[-40px] h-24 bg-white">
                <div>
                    <img className='w-16' src={logo} alt="" />
                </div>
                <div className="flex gap-5 items-center font-bold">
                    <a href="#">Home</a>
                    <a href="#">Fixture</a>
                    <a href="#">Teams</a>
                    <a href="#">Schedule</a>
                    <div className=" flex items-center gap-2 border text-black font-bold border-gray-300 py-2 px-6 rounded-xl cursor-pointer">
                        <p>{coins} Coin</p>
                        <p className="text-yellow-500"><BsCoin /></p>
                    </div>
                </div>
            </nav>

            {/* Banner Section */}
            <div className='text-center space-y-5 mt-32 bg py-10 px-3 '>
                <div className='flex justify-center'>
                    <img src={banner} alt="" />
                </div>
                <h1 className='text-4xl text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-xl text-gray-500'>Beyond Boundaries Beyond Limits</p>

                <button onClick={handleClick} className='btn text-black bg-yellow-400 border-none'>Claim Free Credit</button>
            </div>

        </div>

    );
};

Header.propTypes = {
    handleCoin: PropTypes.function,
    coins: PropTypes.number.isRequired
}

export default Header;