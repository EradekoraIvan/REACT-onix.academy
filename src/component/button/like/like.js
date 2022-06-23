import React from 'react';
import style from './like.module.css';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: true
    };
  }

  likeSelect = (e) => {
    if (e.keyCode === 'l') {
      this.focus();
    }
  }; 

  likeClick = () => {
    this.setState((state) => ({
      styleLike: !state.style
    }));
  };

  render() {
    const { styleLike } = this.state;
    return (
      <span 
        role="button"
        aria-label="like" 
        tabIndex="0" 
        onClick={this.likeClick}
        onKeyDown={this.likeSelect} 
        className={`${style.like} ${styleLike ? style.like_active : ''}`}
      />
    );
  }
} 
export default Like;
