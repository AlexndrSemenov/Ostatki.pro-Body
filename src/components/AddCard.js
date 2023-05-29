import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function AddCard(props) {

  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [article, setArticle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('');
  const [type, setType] = useState('');
  const [supply, setSupply] = useState('');
  const [watched, setWatched] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
  
    props.handleAddToolSubmit({
      brand: brand,
      name: name,
      link: link,
      article: article,
      quantity: quantity,
      unit: unit,
      price: price,
      currency: currency,
      type: type,
      supply: supply,
      watched: watched,
    });
  }

  function handleChangeBrand(e) { setBrand(e.target.value) }
  function handleChangeName(e) { setName(e.target.value) }
  function handleChangeLink(e) { setLink(e.target.value) }
  function handleChangeArticle(e) { setArticle(e.target.value) }
  function handleChangeQuantity(e) { setQuantity(e.target.value) }
  function handleChangeUnit(e) { setUnit(e.target.value) }
  function handleChangePrice(e) { setPrice(e.target.value) }
  function handleChangeCurrency(e) { setCurrency(e.target.value) }
  function handleChangeType(e) { setType(e.target.value) }
  function handleChangeSupply(e) { setSupply(e.target.value) }
  function handleChangeWatched(e) { setWatched(e.target.value) }


  const container = {
    margin: 100,
  }

  const elem = {
    margin: 15,
    height: 40,
    width: 400,
  }

  const button = {
    margin: 15,
    height: 40,
    width: 400,
    background: 'lightblue',
  }

  return(
    <div>
      
      <form type="submit" onSubmit={handleSubmit} style={container} noValidate>

        <input type="text" required onChange={handleChangeBrand} placeholder='Бренд товара - Строка' style={elem} />

        <input type="text" required onChange={handleChangeName} placeholder='Модель товара - Строка' style={elem} />
              
        <input type="url" required onChange={handleChangeLink} placeholder='Ссылка на картинку товара - URL-ссылка' style={elem}/>

        <input type="number" required onChange={handleChangeArticle} placeholder='Артикул товара - Число' style={elem}/>

        <input type="number" required onChange={handleChangeQuantity} placeholder='Количество на складе - Число' style={elem}/>

        <input type="text" required onChange={handleChangeUnit} placeholder='Единица измерения - Строка' style={elem}/>

        <input type="number" required onChange={handleChangePrice} placeholder='Стоимость товара - Число' style={elem}/>

        <input type="text" required onChange={handleChangeCurrency} placeholder='Валюта товара - Строка' style={elem}/>

        <input type="text" required onChange={handleChangeType} placeholder='Вид товара - Строка' style={elem}/>

        <input type="text" required onChange={handleChangeSupply} placeholder='Вид энергообеспечения товара - Строка' style={elem}/>

        <input type="bulean" required onChange={handleChangeWatched} placeholder='Товар просмотрен или нет - True/False' style={elem}/>

        <button type="submit" style={button}>Добавить карточку товара</button>

      </form>

      <Link to="/">Обратно на главную страницу</Link>
    </div>
  )
}

export default AddCard;
