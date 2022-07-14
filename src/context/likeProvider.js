import React, {
  useState, useContext, createContext, useEffect 
} from 'react';

const LikeContext = createContext();

export function LikeProvider({ children, ...props }) {
  const [likeId, setLikeId] = useState(JSON.parse(localStorage.getItem('likeArray')) || []);

  const changeLikeId = (id) => {
    const temp = [...likeId];
    temp.push(id);
    setLikeId(temp);
  };
  const dell = (index) => {
    const temp = [...likeId];
    temp.splice(index.index, 1);
    setLikeId(temp);
  };

  useEffect(() => {
    localStorage.setItem('likeArray', JSON.stringify(likeId));
  }, [changeLikeId, dell]);

  return (
    <LikeContext.Provider
      value={{
        likeId,
        changeLikeId,
        dell,
      }}
      {...props}
    >
      {children}
    </LikeContext.Provider>
  );
}
export default LikeProvider;
export const useLike = () => useContext(LikeContext);
