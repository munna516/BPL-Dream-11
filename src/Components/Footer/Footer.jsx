import footerImg from '../../assets/images/logo-footer.png'

const Footer = () => {
    return (
        <div>

            <div className='w-11/12 mx-auto   relative'>
                <div className='flex flex-col justify-center items-center space-y-5 py-20 px-3 rounded-xl bg-gradient-to-r from-gray-300 to-red-200 absolute w-full top-[-150px]'>
                    <h1 className='text-4xl font-bold'>Subscribe to our Newsletter</h1>
                    <p className='text-lg'>Get the latest updates and news right in your inbox!</p>
                    <div className='flex gap-5 space-y-3 md:space-y-0'>
                        <input className='rounded-lg py-2 px-5 border' placeholder='Enter Your Email' type="text" name="" id="" />
                        <button className='rounded-lg py-2 px-5 text-black border bg-gradient-to-r from-yellow-300 to-red-400 '>Subscribe</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-[#06091A] mt-10 pt-64 lg:pt-44 pb-16">
                <div className="w-11/12 mx-auto space-y-10 md:space-y-20">
                    <div className='flex justify-center'>
                        <img src={footerImg} alt="" />
                    </div>
                    <div className='text-center md:text-left space-y-8 md:space-y-0 md:flex justify-between gap-4'>
                        <div>
                            <h1 className='text-lg text-white'>About Us</h1>
                            <p className='text-gray-400 md:w-3/4 mt-3'>We are a passionate team dedicated to providing the best services to our customers.</p>                    </div>
                        <div>
                            <h1 className='text-lg text-white'>Quick Link</h1>
                            <ul className='text-gray-400 mt-3'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-lg text-white'>Subscribe</h1>
                            <p className='text-gray-400 mt-3'>Subscribe to our newsletter for the latest updates.</p>
                            <div className='flex mt-4 justify-center'>
                                <input className='rounded-l-lg rounded-r-none  py-2 px-3 border-none' placeholder='Enter Your Email' type="text" name="" id="" />
                                <button className='rounded-r-lg rounded-l-none py-2 px-3 text-black border bg-gradient-to-r from-yellow-300 to-red-400 border-none'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className='text-center text-gray-400 border-t border-gray-700'>
                        <p className='mt-6'>@2024 Your Company All Rights Reserved.</p>
                    </div>
                </div>

            </div>
        </div >

    );
};

export default Footer;