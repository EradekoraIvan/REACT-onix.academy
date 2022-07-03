import React, { useMemo, useState } from 'react';
import style from './like.module.css';
import {useLike} from '../../../context/likeProvider';

function Like() {

  const [styleLike, setstyleLike] = useState(false);
  
  const likeSelect = (e) => {
    if (e.keyCode === 'l') {
      this.focus();
    }
  };

  const likeClick = () => {
    setstyleLike(!styleLike)
  };

  const like = useLike();

  const counter =()=>{
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
