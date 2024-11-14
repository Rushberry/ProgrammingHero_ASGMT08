import { useLoaderData, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import { DataContext } from "../../Provider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from "react-helmet-async";



const ProductDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const gadget = data.find(product => product.product_id === id)
    const {product_id, product_title, product_image, price, description, specification, availability, rating} = gadget;
    const {setCart,wish, setWish} = useContext(DataContext)
    const handleAddToCart = () => {
        setCart(cart  => [...cart, gadget])
        toast.success('Gadget Added to Your Cart!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    }

    const [btnDisable, setDisable] = useState(false);

    const handleAddToWishlist = () => {
        const product = wish.filter(wish => wish.product_id === id);
        if(product.length === 0){
            setWish(wish => [...wish, gadget])
            toast.success('Gadget Added to Your Wishlist!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
            setDisable(true)
        }
        else{
            setDisable(true)
        }
        
    }
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>{product_id} | Gadget Heaven</title>
                </Helmet>
            </HelmetProvider>
            <div className="flex flex-col h-[464px] p-8 gap-4 bg-[#9538E2] text-white text-center w-full justify-start items-center">
                <h1 className="font-bold text-[32px]">Product Details</h1>
                <p className="text-[16px] font-normal w-[796px]">Get an up-close look at the latest in tech innovation. Explore this featured gadget designed to enhance your experience with top-tier performance and style!</p>
            </div>
            <div className="relative h-[464px]">
                <div className="absolute h-[567px] w-full bottom-[172px] flex justify-center">
                    <div className="rounded-[24px] p-8 bg-white h-fit w-[972px] -top-[172px] right-[187.5px] flex flex-row gap-8">
                        <div className="w-[424px]">
                            <img src={product_image} className="rounded-[16px] border h-full w-full bg-center bg-contain" alt={product_title} />
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="text-black font-semibold text-[28px]">{product_title}</h1>
                            <p className="mt-3 mb-4 font-semibold text-[20px] text-[#09080FCC]">Price: ${price}</p>
                            {
                                availability === true ? <p  className="text-[#309C08] font-medium text-[14px] rounded-[32px] border border-[#309C08] py-[7px] px-[14px] bg-[#309C081A]">In Stock</p> : <p  className="text-[#9c0808] font-medium text-[14px] rounded-[32px] border border-[#9c0808] py-[7px] px-[14px] bg-[#9c08081a]">Out of Stock</p>
                            }
                            <p className="py-4 text-[18px] font-normal text-[#09080F99]">{description}</p>
                            <p className="text-[18px] mb-3 font-bold">Specification:</p>
                            <ol className="list-decimal ml-[20px] text-[#09080F99] text-[18px] font-normal mb-4">
                                {
                                    specification.map((s, index) => <li key={index}>{s}</li>)
                                }
                            </ol>
                            <p className="text-[18px] font-bold">Rating ⭐ </p>
                            <div className="flex gap-[7px] justify-center">
                                <ReactStars count={5} value={rating} edit={false} size={24} activeColor="#F9C004"></ReactStars>
                                <div className="px-[14px] py-[7px] bg-[#09080F0D] rounded-full justify-center items-center flex text-[14px] font-medium">{rating}</div>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <button onClick={handleAddToCart} className="bg-[#9538E2] px-[22px] py[11px] flex justify-center items-center font-bold text-[18px] gap-[10px] rounded-full text-white">
                                    Add To Cart <BsCart3 className="h-5 w-5"/>
                                </button>
                                <button disabled={btnDisable} onClick={handleAddToWishlist} className={`${btnDisable?'bg-[#6c6c7089]':'bg-white'} cursor-pointer w-10 h-10  rounded-full border ${btnDisable?'text-white':'text-black'} flex justify-center items-center`}>
                                    <FaRegHeart className="h-5 w-5"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default ProductDetails;