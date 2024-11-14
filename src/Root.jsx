import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./assets/Navbar";
import Footer from "./assets/Footer";
import Header from "./components/Home/Header";

const Root = () => {
    const location = useLocation();
    return (
        <>
            {
                location.pathname === '/' || location.pathname === '/home' ? <Header></Header> : <Navbar></Navbar>
            }
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;