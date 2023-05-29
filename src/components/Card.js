import React from 'react';

const Card = ({ card, isRow }) => {
  
  return (
    <li className={isRow ? 'photo-grid__item_row' : 'photo-grid__item'}>

      {isRow ? 
        <>
          <div className='photo-grid__wrapper2_row'>
            <p className="photo-grid__article_title_row">{`Арт. ${card.article}`}</p>
            <div className="photo-grid__likes_row"></div>
          </div>
          <div className='photo-grid__wrapper33_row'>
            <div className='photo-grid__wrapper44_row'>
              <img src={card.link} alt={card.name} className='photo-grid__image_row'/>
              <div className='photo-grid__wrapper55_row'>
                <p className="photo-grid__stock">{`В наличии: ${card.quantity} ${card.unit}`}</p>
                <h3 className='photo-grid__description_row'>{card.name}</h3>
              </div>
            </div>
            <div className='photo-grid__wrapper77_row'>
              <div className='photo-grid__wrapper4_row'>
                <p className="photo-grid__price">{card.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}</p>
                <p className="photo-grid__price_quantity">{`${card.currency}/${card.unit}`}</p>
              </div>
              <button type="button" className='photo-grid__button_row'>В корзину</button>
            </div>
          </div>
        </>
      :
        <>
          <img src={card.link} alt={card.name} className='photo-grid__image'/>
          <div className='photo-grid__wrapper2'>
            <p className="photo-grid__article_title">Арт.</p>
            <p className="photo-grid__article">{card.article}</p>
            <div className="photo-grid__likes"></div>
          </div>
          <h3 className='photo-grid__description'>{card.name}</h3>
          <p className="photo-grid__stock">{`В наличии: ${card.quantity} ${card.unit}`}</p>
          <div className='photo-grid__wrapper4'>
            <p className="photo-grid__price">{card.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}</p>
            <p className="photo-grid__price_quantity">{`${card.currency}/${card.unit}`}</p>
          </div>
          <button type="button" className='photo-grid__button'>В корзину</button>
        </> 
      }
      
    </li>
  );
};

export default Card;
