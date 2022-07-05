import React, { useEffect, useState } from 'react';
import style from './like.module.css';
import { useLike } from '../../../context/likeProvider';

function Like() {

  const [styleLike, setStyleLike] = useState(false);

  useEffect(()=>{
    const saved = localStorage.getItem('styleLike');
    setStyleLike(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("styleLike", JSON.stringify(styleLike));
  }, [styleLike]);

  const likeSelect = (e) => {
    if (e.keyCode === 'l') {
      this.focus();
    }
  };

  const likeClick = () => {
    setStyleLike(!styleLike);  
  };

  const like = useLike();

  const counter = () => {
    like.changeIsLike(styleLike ? -1 : +1)
  }
  return (
    <span
      role="button"
      aria-label="like"
      tabIndex="0"
      onClick={() => {
        likeClick()
        counter()
      }}
      onKeyDown={likeSelect}
      className={`${style.like} ${styleLike ? style.like_active : ''}`}
    />
  );
}
export default Like;
