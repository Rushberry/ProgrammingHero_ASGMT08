import { Helmet, HelmetProvider } from "react-helmet-async";

const Statistics = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <HelmetProvider>
                <Helmet>
                    <title>Statistics | Gadget Heaven</title>
                </Helmet>
            </HelmetProvider>
            <div className="flex flex-col p-8 gap-4 bg-[#9538E2] text-white text-center w-full justify-center items-center">
                <h1 className="font-bold text-[32px]">Statistics</h1>
                <p className="text-[16px] font-normal w-[796px]">Track prices, product names, and customer ratings for a complete view on each gadget! Area and bar charts show prices, while scatter points highlight ratings.</p>
            </div>
            <div className="flex flex-col mx-[150px] mt-[56px] w-full">
                <div><h3 className="font-bold mx-[150px] ml-[110px] mb-[43px] text-[24px] text-left">Statistics</h3></div>
            </div>
            <div className="flex justify-center items-center w-[1040px] mb-[100px] bg-white rounded-[16px] p-8 pt-[88px]">
                
            </div>
        </div>
    );
};

export default Statistics;