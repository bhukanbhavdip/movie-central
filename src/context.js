import React, { useContext, useEffect, useState } from "react";

const API_URL = ` http://www.omdbapi.com/?apikey=d005e3b1`;

const AppContext = React.createContext();


const AppProvider = ({ children }) => {

    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: false, msg: "" });
    const [query,setQuery] = useState("titanic");

    const getMovies = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response==="True"){
                setMovie(data.Search);
                setIsError({
                    show:false,
                    msg: ""
                });
            }
            else{
                setIsError({
                    show:true,
                    msg: data.Error
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);
        }, 800);
        return()=> clearTimeout(timerOut);
    }, [query])
    

    return <AppContext.Provider value={{isError,movie,query,setQuery,setIsError}}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };

