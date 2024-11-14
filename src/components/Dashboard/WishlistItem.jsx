import { BsCart3 } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
const WishlistItem = ({product}) => {
    const {product_title, product_image, description, price} = product;
    
    return (
        <div className="flex flex-row bg-white w-full gap-8 justify-start items-center p-8 rounded-[16px]">
            <img src={product_image} alt={product_title} className="w-[200px] border rounded-[12px]"/>
            <div className="flex flex-col gap-4 ">
                <RxCrossCircled className="text-[#ff0000] ml-[710px] absolute -mt-[13px] text-[36px]"></RxCrossCircled>
                <h3 className="text-black font-bold text-[24px]">{product_title}</h3>
                <p className="text-[#09080F99] text-[18px] font-normal">{description}</p>
                <p className="text-black text-[20px] font-medium">Price: ${price}</p>
                <button className="bg-[#9538E2] h-[52px] flex justify-center items-center font-medium w-[164px] text-[18px] gap-[10px] rounded-full text-white">
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default WishlistItem;