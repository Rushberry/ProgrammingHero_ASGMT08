import {Link, NavLink } from "react-router-dom";
import  "../custom.css"
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";



const Header = () => {
    return (
        <div className="mx-auto max-w-6xl pt-[30px] bg-[#f7f7f7]">
            <div className="rounded-[30px] border p-2 mb-[500px]">
                <div className="bg-[#9538E2] h-[590px] rounded-[24px] flex flex-col">
                    <nav className="flex flex-row justify-between mx-[40px] pt-[20px] text-white items-center z-10">
                        <h1 className="text-[20px] font-semibold ">Gadget Heaven</h1>
                        <div className="flex flex-row gap-[48px] text-[16px] font-medium justify-center">
                            <NavLink to="/" exact="true" className="py-1 px-3">Home</NavLink>
                            <NavLink to="/statistics" className="py-1 px-3">Statistics</NavLink>
                            <NavLink to="/dashboard" className="py-1 px-3">Dashboard</NavLink>
                            <NavLink to="/contact" className="py-1 px-3">Contact</NavLink>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="w-10 h-10 bg-white rounded-full text-black flex justify-center items-center">
                                <HiOutlineShoppingCart className="h-5 w-5"/>
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full text-black flex justify-center items-center">
                                <FaRegHeart className="h-5 w-5"/>
                            </div>
                        </div>
                    </nav>
                    <div className="flex mt-12 flex-col gap-4 w-full text-center justify-center items-center text-white z-10">
                        <h1 className="text-[56px] font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="font-normal text-[16px] w-[796px]">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <Link to="/dashboard"><button className="text-[#9538E2] mt-2 bg-white px-[30px] py-[15px] rounded-[32px] text-[20px] font-bold">Shop Now</button></Link>
                    </div>
                    <div className="absolute">
                        <div className="relative border-white border rounded-[32px] bg-[#FFFFFF4D] -bottom-[470px] -right-20">
                            <img src="images/banner.jpg" className="w-[970px] rounded-[32px] p-4 h-[563px]" alt="Cool Banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;