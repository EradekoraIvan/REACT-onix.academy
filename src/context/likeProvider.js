import React, { useState, useContext, createContext } from 'react';

const LikeContext = createContext();

export function LikeProvider({ children, ...props }) {
    const [isLike, setIsLike] = useState(0);

    const changeIsLike = (value) => {
        setIsLike(prevIsLike => prevIsLike + value);
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