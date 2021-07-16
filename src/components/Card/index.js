import React from 'react';
import style from './Card.module.scss';

function Card({onFavorite, imageUrl, price, title, onPlus }) {

  const  [isAdded ,setIsAdded] = React.useState(false)

  const onClickPlus = () => {
    onPlus({imageUrl, price, title})
    setIsAdded(!isAdded)
  }

  
  return (
    <div className={style.card}>
      <div className={style.favorite} onClick = {onFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={256} height={256} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        
          <img className={style.plus} onClick = {onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus" />
        
      </div>
    </div>
  );
} 

export default Card;
