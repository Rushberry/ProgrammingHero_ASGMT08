import { Link } from "react-router-dom";

const Product = ({gadget}) => {
    const {product_image, product_title, price, product_id} = gadget;
    return (
        <div className="p-5 w-[282px] h-[450px] flex flex-col justify-start items-start bg-white rounded-[16px]">
            <img src={product_image} alt={product_title} className="border rounded-[12px]"/>
            <h3 className="mt-6 mb-3 text-[24px] text-black font-semibold">{product_title}</h3>
            <p className="mb-4 flex-grow text-[20px] font-medium text-[#09080F99]">Price: ${price}</p>
            <Link to={`/product/${product_id}`}><button className="border border-[#9538E2] rounded-full text-[18px] font-semibold py-[13px] px-[22px] text-[#9538E2]">View Details</button></Link>
        </div>
    );
};

export default Product;