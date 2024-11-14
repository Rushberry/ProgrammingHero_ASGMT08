const Footer = () => {
    return (
        <div className="mx-auto flex flex-col justify-center items-center w-full bg-white py-[100px]">
            <h2 className="text-[32px] font-bold text-black">Gadget Heaven</h2>
            <p className="font-medium text-[16px] text-[#09080F99] w-[75%] text-center mt-3 pb-8 border-b">Leading the way in cutting-edge technology and innovation.</p>
            <div className="mt-8 flex flex-row justify-center gap-[165px]">
                <ul className="text-center text-[16px] text-[#09080F99] space-y-2 font-normal">
                    <h3 className="text-black text-[18px] font-bold">Services</h3>
                    <li>Product Support</li>
                    <li>Order Tracking</li>
                    <li>Shipping & Delivery</li>
                    <li>Returns</li>
                </ul>
                <ul className="text-center text-[16px] text-[#09080F99] space-y-2 font-normal">
                    <h3 className="text-black text-[18px] font-bold">Company</h3>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
                <ul className="text-center text-[16px] text-[#09080F99] space-y-2 font-normal">
                    <h3 className="text-black text-[18px] font-bold">Legal</h3>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;