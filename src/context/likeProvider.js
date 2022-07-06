import React, { useState, useContext, createContext, useEffect } from 'react';

const LikeContext = createContext();

export function LikeProvider({ children, ...props }) {
    const [isLike, setIsLike] = useState(0);
    const counterLike =  localStorage.getItem('likeCaunter') || 0;
    const changeIsLike = (value) => {
       isLike ? setIsLike(prevIsLike => prevIsLike + value) : setIsLike(JSON.parse(counterLike) + value)
    };
    return (
        <LikeContext.Provider
            value={{
                isLike: isLike,
                changeIsLike
            }}
            {...props}>
                {children}
            </LikeContext.Provider>
            );
}
export default LikeProvider;
export const useLike = () => useContext(LikeContext);