const Error404 = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center bg-white items-center">
            <img src="/images/404.png" alt="Page not found" className="w-[500px] mt-[100px]"/>
            <h3 className="text-2xl">Page Not Found</h3>
        </div>
    );
};

export default Error404;