import React, {
  useState, useContext, createContext, useEffect 
} from 'react';

const LikeContext = createContext();

export function LikeProvider({ children, ...props }) {
  const [isLike, setIsLike] = useState(0);
  const [likeId, setLikeId] = useState(JSON.parse(localStorage.getItem('likeArray')) || [])
  
  const counterLike = localStorage.getItem('likeCaunter') || 0;
  
  const changeIsLike = (value) => {
    isLike ? setIsLike((prevIsLike) => prevIsLike + value) : setIsLike(JSON.parse(counterLike) + value);
  };
  const changeLikeId = (id) => {
    const temp = [...likeId]
    temp.push(id)
    setLikeId(temp)
    /*localStorage.setItem('likeArray', JSON.stringify(temp))*/
  }
  const dell = (index) => {
    const temp = [...likeId]
    temp.splice(index.index, 1)
    setLikeId(temp)
    /*localStorage.setItem('likeArray', JSON.stringify(temp))*/
  }

  useEffect(()=>{
    localStorage.setItem('likeArray', JSON.stringify(likeId))
    const x = JSON.parse(localStorage.getItem('likeArray')).length
    console.log (x)
  }, [changeLikeId, dell])

  return (
    <LikeContext.Provider
      value={{
        likeId,
        changeLikeId,
        dell,
        isLike,
        changeIsLike
      }}
      {...props}
    >
      {children}
    </LikeContext.Provider>
  );
}
export default LikeProvider;
export const useLike = () => useContext(LikeContext);
