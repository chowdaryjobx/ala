import React,{useState,useEffect} from 'react';
const DataContext = React.createContext();

export const AuthContext =({children})=>{

    const [cartItems,setCartItems] = useState([]);

    const addToCart =(item)=>{
        setCartItems([...cartItems,item]);
        console.log(cartItems);
         }

    return(
        <DataContext.Provider value={{cartItems,addToCart}} >
        {children}
        </DataContext.Provider>
    );
}

export default DataContext;