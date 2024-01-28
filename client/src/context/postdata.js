import React,{useContext,useEffect, useState,useRef} from 'react';
const  AppContext  = React.createContext();

const AppProvider = ({children})=>{
        const [postdata,setpostdata] = useState();
    return <AppContext.Provider value={{setpostdata,postdata}}>{children}</AppContext.Provider>
};

//custom hooks

const useGlobalContext  = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider,usePostDataContext};