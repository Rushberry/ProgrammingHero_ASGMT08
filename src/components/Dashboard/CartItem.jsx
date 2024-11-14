import { RxCrossCircled } from "react-icons/rx";
const CartItem = ({product}) => {
    const {product_title, product_image, description, price} = product;
    return (
        <div className="flex flex-row bg-white w-full gap-8 justify-start items-center p-8 rounded-[16px]">
            <img src={product_image} alt={product_title} className="w-[200px] border rounded-[12px]"/>
            <div className="flex flex-col gap-4 w-full">
                <RxCrossCircled className="text-[#ff0000] ml-[710px] absolute -mt-[35px] text-[36px]"></RxCrossCircled>
                <h3 className="text-black font-bold text-[24px]">{product_title}</h3>
                <p className="text-[#09080F99] text-[18px] font-normal">{description}</p>
                <p className="text-black text-[20px] font-medium">Price: ${price}</p>
                
            </div>
        </div>
    );
};

export default CartItem;