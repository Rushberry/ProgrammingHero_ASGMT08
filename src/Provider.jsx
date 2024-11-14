import { createContext, useState } from "react";

export const DataContext = createContext([])

const DataProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [wish, setWish] = useState([])
    const value = {cart, wish, setCart, setWish}
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;