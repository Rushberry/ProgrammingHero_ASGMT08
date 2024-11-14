import { useContext, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { DataContext } from "../../Provider";
import CartItem from "./CartItem";
import WishlistItem from "./WishlistItem";
import { PiSliders } from "react-icons/pi";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const navigate = useNavigate();
    const data = useContext(DataContext)
    const {cart, wish, setCart} = data;
    const [sortCart, setSortCart] = useState(cart)
    const [cartView, setCartView] = useState(true)
    const [wishlistView, setWishlistView] = useState(false)
    const [modalTotal, setModalTotal] = useState(0)

    const handleSort = () => {
        setSortCart([...cart].sort((a,b) => b.price - a.price))
    }

    const handleNavigate = () => {
        navigate('/home')
    }

    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(cart.reduce((a, p) => a + p.price, 0))
    },[cart])

    const handlePurchase = () => {
        setModalTotal(total)
        purchase.showModal()
        setCart([])
    }
    const handleSelect = (e) => {
        const current = e.target.innerText;
        if(current === 'Cart'){
            setCartView(true)
            setWishlistView(false)
        }
        else{
            setCartView(false)
            setWishlistView(true)
        }

    }
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <HelmetProvider>
                <Helmet>
                    <title>Dashboard | Gadget Heaven</title>
                </Helmet>
            </HelmetProvider>

            <div className="flex flex-col p-8 gap-4 bg-[#9538E2] text-white text-center w-full justify-center items-center">
                <h1 className="font-bold text-[32px]">Dashboard</h1>
                <p className="text-[16px] font-normal w-[796px]">Manage your cart and wishlist effortlessly. Find the best deals on top gadgets and keep track of your total costs, all in one place!</p>
                <div className="flex justify-center items-center gap-6 py-[30px]">
                    <button onClick={(e) => handleSelect(e)} className={` ${cartView? 'bg-white font-bold text-[#9538E2]' : 'bg-[#9538E2] font-medium text-white'} py-[13px] px-[64px] rounded-[32px] border border-white text-[18px]`}>Cart</button>
                    <button onClick={(e) => handleSelect(e)} className={` ${wishlistView? 'bg-white font-bold text-[#9538E2]' : 'bg-[#9538E2] font-medium text-white'} py-[13px] px-[64px] rounded-[32px] border border-white text-[18px]`}>Wishlist</button>
                </div>
            </div>

            {/* Cart & Wishlist Title*/}

            <div className={` ${cartView ? 'flex' : 'hidden'} flex-row justify-between items-center mt-[56px] mb-[43px] w-[1040px]`}>
                <h3 className="font-bold text-[24px]">Cart</h3>
                <div className="flex justify-end items-center flex-row gap-4">
                    <h2 className="text-[24px] font-semibold text-black">Total Cost: ${total}</h2>
                    <button onClick={handleSort} className="text-[#9538E2] border border-[#9538E2] text-[18px] font-semibold flex flex-row items-center gap-[10px] rounded-full py-[13px] px-[22px]">Sort by Price <PiSliders/></button>
                    <button disabled={cart.length === 0 ? true : false} onClick={handlePurchase} className={`${cart.length === 0 ? 'bg-[#6c6c7089]' : 'bg-[#9538E2]'} text-[#fff] border text-[18px] font-medium flex flex-row items-center gap-[10px] rounded-full py-[13px] px-[22px]`}>Purchase</button>

                </div>
            </div>

            <div className={` ${wishlistView ? 'flex' : 'hidden'} flex-row justify-between items-center mt-[56px] mb-[43px] w-[1040px]`}>
                <h3 className="font-bold text-[24px]">Wishlist</h3>
            </div>

            {/* Cart & Wishlist Container */}
            <div className={`${cartView ? 'flex' : 'hidden'} justify-center flex-col gap-6 items-start w-[1040px] mb-[100px]`}>
                {
                    cart.length ? sortCart.map((product, idx) => <CartItem key={idx} product={product}></CartItem>) : <h1 className="font-bold text-[40px] text-[#9538E2] w-[894px] col-span-3 text-center">No gadget added to cart.</h1>
                }
            </div>
            <div className={`${wishlistView ? 'flex' : 'hidden'} justify-center flex-col gap-6 items-start w-[1040px] mb-[100px]`}>
                {
                    wish.length ? wish.map(product => <WishlistItem key={product.product_id} product={product}></WishlistItem>) : <h1 className="font-bold text-[40px] text-[#9538E2] w-[894px] col-span-3 text-center">No gadget added to wishlist.</h1>
                }
            </div>
            <dialog id="purchase" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box font-sora flex justify-center items-center flex-col py-[32px]">
                <img src="images/Group.png" alt="Successful" />
                <h3 className="font-bold text-[24px] mt-[24px] w-full text-center border-b pb-[11px]">Payment Successfully</h3>
                <p className="py-4 text-center -mb-2">Thanks for purchasing.<br /> Total: ${modalTotal}</p>
                <div className="modal-action">
                <form method="dialog" className="flex justify-center items-center w-full">
                    <button onClick={handleNavigate} className="btn w-full px-[200px] rounded-full font-semibold text-[16px]">Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </div>
    );
};

export default Dashboard;