import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Brand from './Brand';
import postCard from '../images/postcard.svg';

import {
  PHONE_SCREEN_WIDTH,
  PAD_SCREEN_WIDTH,
  LAPTOP_SCREEN_WIDTH,
  NUMBER_MOVIES_ON_SCREEN_PHONE,
  NUMBER_MOVIES_ON_SCREEN_PHONE_ROW,
  NUMBER_MOVIES_ON_SCREEN_PAD,
  NUMBER_MOVIES_ON_SCREEN_PAD_ROW,
  NUMBER_MOVIES_ON_SCREEN_LAPTOP,
  NUMBER_MOVIES_ON_SCREEN_LAPTOP_ROW,
  NUMBER_MOVIES_ON_SCREEN_DESKTOP,
  NUMBER_MOVIES_ON_SCREEN_DESKTOP_ROW,
} from '../utils/constants';

function Main({ electricTools, data }) {
  // получаем список всех брендов электроинструмента
  const brandsUnique = {};
  electricTools.forEach((item) => {
    brandsUnique[item.brand] = true;
  });
  const uniqueBrands = Object.keys(brandsUnique).sort();

  // получаем список видов (дрель, шуруповерт и т.д.) электроинструмента
  const typeUnique = {};
  electricTools.forEach((item) => {
    typeUnique[item.type] = true;
  });
  const uniqueType = Object.keys(typeUnique).sort();

  // получаем список вариантов энергообеспечения (от сети, аккумулятора и т.д.) электроинструмента
  const supplyUnique = {};
  electricTools.forEach((item) => {
    supplyUnique[item.supply] = true;
  });
  const uniqueSupply = Object.keys(supplyUnique).sort();

  // получаем список из трех недавно просмотренных карточек
  const electricWatchedTools = electricTools.filter((item) => item.watched === true).slice(0, 3);

  // _______________________________________________________________________________

  // работа с кнопкой "Показать еще" раздела Бренды
  // видимость кнопки "Показать еще"
  const [isLongBrandList, setIsLongBrandList] = useState();

  // изначально отображаемые бренды
  const initialDisplayedBrands = uniqueBrands.slice(0, 5);

  // отображаемые бренды
  const [displayedBrands, setDisplayedBrands] = useState(initialDisplayedBrands);

  function showAllBrandClick() {
    setIsLongBrandList(true);
    setDisplayedBrands(uniqueBrands);
  }

  // _______________________________________________________________________________

  // работа с кнопкой "Показать еще" раздела Типы
  // видимость кнопки "Показать еще"
  const [isLongTypeList, setIsLongTypeList] = useState();

  function showAllTypeClick() {
    setIsLongTypeList(true);
    setDisplayedTypes(uniqueType);
  }

  // изначально отображаемые виды электроинструмента
  const initialDisplayedTypes = uniqueType.slice(0, 5);

  // отображаемые виды электроинструмента
  const [displayedTypes, setDisplayedTypes] = useState(initialDisplayedTypes);

  // _______________________________________________________________________________

  // переключение вида карточек с грида на строки и наоборот

  const [isRow, setIsRow] = useState();

  const setIsRowHandleClick = () => { setIsRow(true); };

  const setIsGridHandleClick = () => { setIsRow(false); };

  // _______________________________________________________________________________

  // Количество карточек товара на экране пользователя

  // ширина экрана пользователя
  const screenWidth = document.documentElement.clientWidth;

  // количество карточек товара на экране
  const [numberMoviesOnScreen, setNumberMoviesOnScreen] = useState('');

  function changeNumberMovieOnScreen() {
    if (screenWidth < PHONE_SCREEN_WIDTH) {
      setNumberMoviesOnScreen(isRow ? NUMBER_MOVIES_ON_SCREEN_PHONE_ROW : NUMBER_MOVIES_ON_SCREEN_PHONE);
    } else if (screenWidth < PAD_SCREEN_WIDTH) {
      setNumberMoviesOnScreen(isRow ? NUMBER_MOVIES_ON_SCREEN_PAD_ROW : NUMBER_MOVIES_ON_SCREEN_PAD);
    } else if (screenWidth < LAPTOP_SCREEN_WIDTH) {
      setNumberMoviesOnScreen(isRow ? NUMBER_MOVIES_ON_SCREEN_LAPTOP_ROW : NUMBER_MOVIES_ON_SCREEN_LAPTOP);
    } else {
      setNumberMoviesOnScreen(isRow ? NUMBER_MOVIES_ON_SCREEN_DESKTOP_ROW : NUMBER_MOVIES_ON_SCREEN_DESKTOP);
    }
  }

  // изначально отображаемые виды электроинструмента
  const initialDisplayedCards = electricTools.slice(0, numberMoviesOnScreen);

  // _______________________________________________________________________________

  // Определяем количество карточек товара на экране в зависимости от ширины экрана пользователя
  useEffect(() => {
    changeNumberMovieOnScreen();
    // setDisplayedCards(initialDisplayedCards);
  }, [isRow]);

  // _______________________________________________________________________________

  return (
    <div>
      <section className="body__launch">
        <h2 className="launch__title">Инструменты</h2>
        <p className="launch__count">{`${data.count.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} товаров`}</p>
        <img src={data.promotion} alt="Рекламный баннер" className="launch__promotion" />
        <ul className="launch__wrapper">
          <li className="launch__button"><Link to="/#" className="launch__button_text launch__button_text_active border-bottom_active">Электроинструменты</Link></li>
          <li className="launch__button"><Link to="/#" className="launch__button_text">Наборы инструментов</Link></li>
          <li className="launch__button"><Link to="/#" className="launch__button_text">Ключи и отвертки</Link></li>
          <li className="launch__button"><Link to="/#" className="launch__button_text">Измерительный инструменты</Link></li>
          <li className="launch__button"><Link to="/#" className="launch__button_text">Слесарные инструменты</Link></li>
          <li className="launch__button"><Link to="/#" className="launch__button_text">Запчасти и аксессуары</Link></li>
          <li className="launch__button"><Link to="/#" className="launch__button_text">Еще</Link></li>
        </ul>
        <div className="launch__wrapper2">
          <div className="">
            <h3 className="launch__wrapper_title">Электроинструменты</h3>
            <p className="launch__wrapper_count">{`${electricTools.length.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')} товаров`}</p>
          </div>
          <div className="launch__wrapper3">
            <div className="launch__wrapper4">
              <p className="launch__wrapper4_title">Популярное</p>
              <button type="button" className="launch__wrapper4_arrow" />
            </div>

            <div className="launch__wrapper5">
              <button type="button" className={`launch__wrapper5_grid ${isRow ? 'launch__wrapper5_grid' : 'launch__wrapper5_grid_active'}`} onClick={setIsGridHandleClick} />
              <button type="button" className={`launch__wrapper5_row ${isRow ? 'launch__wrapper5_row_active' : 'launch__wrapper5_row'}`} onClick={setIsRowHandleClick} />
            </div>

          </div>
        </div>
      </section>

      <div className="body__wrapper">
        <section className="product">

          <div className="product__brands_wrapper">
            <h4 className="product__brands_title">Бренды</h4>
            <ul className="product__brands_table">
              {
                displayedBrands.map((item) => (
                  <Brand brand={item} />
                ))
              }
            </ul>
            <button type="button" className={`brand__showMoreButton ${isLongBrandList ? 'brand__showMoreButton_invisible' : 'brand__showMoreButton'}`} onClick={showAllBrandClick}>Показать еще</button>
          </div>

          <div className="product__price_wrapper">
            <h4 className="product__brands_title">Цена</h4>
            <div className="product__price_slider" id="product-slider">Здесь будет слайдер</div>
            <div className="product__price_inputs">
              <label className="product__price_label">
                <span className="product__price_text">от</span>
                <input type="number" min="500" max="425500" placeholder="500" className="product__price_input" id="price-input1" />
              </label>
              <label className="product__price_label">
                <span className="product__price_text">до</span>
                <input type="number" min="500" max="425500" placeholder="425500" className="product__price_input" id="price-input2" />
              </label>
            </div>
          </div>

          <div className="product__smallQuantity">
            <h4 className="product__smallQuantity_title">Последние остатки</h4>
            <label className="checkbox-ios">
              <input type="checkbox" />
              <span className="checkbox-ios-switch" />
            </label>
          </div>

          <div className="product__smallQuantity">
            <h4 className="product__smallQuantity_title">В большом количестве</h4>
            <label className="checkbox-ios">
              <input type="checkbox" />
              <span className="checkbox-ios-switch" />
            </label>
          </div>

          <div className="product__brands_wrapper">
            <h4 className="product__brands_title">Тип</h4>
            <ul className="product__brands_table">
              {
                displayedTypes.map((item) => (
                  <Brand type={item} />
                ))
              }
            </ul>
            <button type="button" className={`type__showMoreButton ${isLongTypeList ? 'type__showMoreButton_invisible' : 'type__showMoreButton'}`} onClick={showAllTypeClick}>Показать еще</button>
          </div>

          <div className="product__price_wrapper">
            <h4 className="product__brands_title">Макс. мощность, Вт</h4>
            <div className="product__price_slider" id="product-slider">Здесь будет слайдер</div>
            <div className="product__price_inputs">
              <label className="product__price_label">
                <span className="product__price_text">от</span>
                <input type="number" min="5" max="3600" placeholder="5" className="product__price_input" id="price-input1" />
              </label>
              <label className="product__price_label">
                <span className="product__price_text">до</span>
                <input type="number" min="5" max="3600" placeholder="3600" className="product__price_input" id="price-input2" />
              </label>
            </div>
          </div>

          <div className="product__brands_wrapper">
            <h4 className="product__brands_title">Питание</h4>
            <ul className="product__brands_table">
              {
                uniqueSupply.map((item) => (
                  <Brand supply={item} />
                ))
              }
            </ul>
          </div>

          <button type="button" className="product__button product__button_active">Применить фильтр</button>

        </section>

        <section className="photo-grid body__photo-grid">
          <ul className="photo-grid__table">
            {
              initialDisplayedCards.map((card) => (
                <Card
                  card={card}
                  isRow={isRow}
                />
              ))
            }
          </ul>
          <div className="photo-grid__pages">
            <ul className="photo-grid__pages_wrapper">
              <li className="photo-grid__pages_item photo-grid__pages_item_active">01</li>
              <li className="photo-grid__pages_item">02</li>
              <li className="photo-grid__pages_item">03</li>
              <li className="photo-grid__pages_item">04</li>
              <li className="photo-grid__pages_item">05</li>
              <li className="photo-grid__pages_item">06</li>
              <li className="photo-grid__pages_item">07</li>
              <li className="photo-grid__pages_item">08</li>
              <li className="photo-grid__pages_item">09</li>
              <li className="photo-grid__pages_item">10</li>
              <li className="photo-grid__pages_item">...</li>
            </ul>
            <button type="button" className="photo-grid__pages_button">Дальше</button>
          </div>

        </section>
      </div>

      <section className="body__watched">
        <h3 className="body__watched_title">Вы недавно смотрели</h3>
        <ul className="photo-grid__table">
          {
              electricWatchedTools.map((card) => (
                <Card card={card} />
              ))
            }
        </ul>
      </section>

      <section className="body__subscription">
        <h3 className="body__subscription_title">Не упускайте выгоду</h3>
        <p className="body__subscription_description">Подпишитесь и получайте промокоды, акции и подборки товаров на свою почту.</p>

        <div className="body__subscription_wrapper">

          <div className="body__subscription_wrapper2">
            <img src={postCard} alt="Изображение конверта" className="body__subscription_image" />
            <input type="email" placeholder="Укажите ваш email" className="body__subscription_input" />
          </div>

          <button type="button" className="body__subscription_button">Подписаться</button>

        </div>

        <p className="body__subscription_text">Нажимая «Подписаться» вы соглашаетесь с Условиями использования сайта и Политикой обработки персональных данных.</p>
      </section>
    </div>
  );
}

export default Main;
