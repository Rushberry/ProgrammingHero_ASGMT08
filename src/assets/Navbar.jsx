import {NavLink } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="bg-white">
            <nav className="flex flex-row justify-between mx-[150px] py-[24px] text-black items-center z-10">
                        <h1 className="text-[20px] font-semibold ">Gadget Heaven</h1>
                        <div className="flex flex-row gap-[48px] text-[16px] text-[#0B0B0BB3] font-medium justify-center">
                            <NavLink to="/" className="py-1 px-3">Home</NavLink>
                            <NavLink to="/statistics" className="py-1 px-3">Statistics</NavLink>
                            <NavLink to="/dashboard" className="py-1 px-3">Dashboard</NavLink>
                            <NavLink to="/contact" className="py-1 px-3">Contact</NavLink>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="w-10 h-10 bg-white rounded-full text-black border flex justify-center items-center">
                                <HiOutlineShoppingCart className="h-5 w-5"/>
                            </div>
                            <div className="w-10 h-10 bg-white rounded-full text-black border flex justify-center items-center">
                                <FaRegHeart className="h-5 w-5"/>
                            </div>
                        </div>
                    </nav>
        </div>
    );
};

export default Navbar;