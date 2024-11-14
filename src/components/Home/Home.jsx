import {useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Product from "../Products/Product";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const gadgets = useLoaderData();
    useEffect(() => {
        fetch('/gadgets.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    const [buttonActive, setButtonActive] = useState(0)
    const handleChangeStatus = (i) => {
        setButtonActive(i)
    }
    const handleShowGadgets = (i, e) => {
        handleChangeStatus(i)
        if(e.target.innerText === 'All Product'){
            setData(gadgets)
        }
        else{
            const products = gadgets.filter(product => product.category === e.target.innerText)
            setData(products)
        }
    }
    const[data, setData] = useState([])




    return (
        <div className="flex justify-center flex-col items-center mb-[100px]">
            <HelmetProvider>
                <Helmet>
                    <title>Gadgets | Gadget Heaven</title>
                </Helmet>
            </HelmetProvider>

            <h1 className="text-[40px] text-black font-bold mb-[48px]">Explore Cutting-Edge Gadgets</h1>
            <div className="flex flex-row gap-6">
                <div className="flex flex-col h-[566px] rounded-[14px] border text-[18px] font-medium text-[#09080F99] bg-white gap-6 p-6">
                    <button onClick={(e) => {handleShowGadgets(0,e)}} className={` ${buttonActive === 0 && 'category-active'} w-[198px] px-[28px] py-[13px] rounded-full text-left bg-[#09080F0D]`}>All Product</button>
                    <button onClick={(e) => {handleShowGadgets(1,e)}} className={` ${buttonActive === 1 && 'category-active'} w-[198px] px-[28px] py-[13px] rounded-full text-left bg-[#09080F0D]`}>Laptops</button>
                    <button onClick={(e) => {handleShowGadgets(2,e)}} className={` ${buttonActive === 2 && 'category-active'} w-[198px] px-[28px] py-[13px] rounded-full text-left bg-[#09080F0D]`}>Phones</button>
                    <button onClick={(e) => {handleShowGadgets(3,e)}} className={` ${buttonActive === 3 && 'category-active'} w-[198px] px-[28px] py-[13px] rounded-full text-left bg-[#09080F0D]`}>Accessories</button>
                    <button onClick={(e) => {handleShowGadgets(4,e)}} className={` ${buttonActive === 4 && 'category-active'} w-[198px] px-[28px] py-[13px] rounded-full text-left bg-[#09080F0D]`}>Smart Watches</button>
                    <button onClick={(e) => {handleShowGadgets(5,e)}} className={` ${buttonActive === 5 && 'category-active'} w-[198px] px-[28px] py-[13px] rounded-full text-left bg-[#09080F0D]`}>MacBook</button>
                    <button onClick={(e) => {handleShowGadgets(6,e)}} className={` ${buttonActive === 6 && 'category-active'} w-[198px] px-[28px] py-[13px] rounded-full text-left bg-[#09080F0D]`}>Iphone</button>
                </div>
                <div className="grid justify-center grid-cols-3 gap-6">
                    {
                     data.length ? data.map((gadget) => <Product key={gadget.product_id} gadget={gadget}></Product>) : <h1 className="font-bold text-[40px] text-[#9538E2] w-[894px] col-span-3 text-center">No data available for the category.</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;