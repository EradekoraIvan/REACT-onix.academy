import React, { useEffect, useState } from 'react';
import style from './like.module.css';
import { useLike } from '../../../context/likeProvider';

function Like(id, index) {
  const [styleLike, setStyleLike] = useState(false);
  const saved = localStorage.getItem(JSON.stringify(id)) || false;
  useEffect(() => {
    setStyleLike(JSON.parse(saved));
    console.log(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(JSON.stringify(id), JSON.stringify(styleLike));
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
    styleLike
      ? like.dell(index)
      : like.changeLikeId(id);
  };
  return (
    <span
      role="button"
      aria-label="like"
      tabIndex="0"
      onClick={() => {
        likeClick();
        counter();
      }}
      onKeyDown={likeSelect}
      className={`${style.like} ${styleLike ? style.like_active : ''}`}
    />
  );
}
export default Like;
