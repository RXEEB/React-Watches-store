import React from 'react';
import Card from './components/Card/';
import Header from './components/Header';
import Drawer from './components/Drawer';
import axios from 'axios';

function App() {

const [items , setItems]  =  React.useState([])
const [cartItems , setCartItems]  =  React.useState([])
const [cardOpened , setCardOpened] = React.useState(false)
const [searchValue, setSearchValue] = React.useState('')

React.useEffect (()=> {


axios.get('https://60ee00d8eb4c0a0017bf42e1.mockapi.io/items').then(res =>{setItems(res.data)})


},[])


const onAddToCart  = (obj) => {
  setCartItems(prev => [...prev, obj])
}


const onChangeSearchValue  = (event) => {
  setSearchValue(event.target.value)
}
  return (
    <div className="wrapper clear">
      { cardOpened && <Drawer items = {cartItems}  onClose = {() => setCardOpened(false) } />  }
      <Header  onClickCrard ={() => setCardOpened(true) } />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все часы"}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            {searchValue && <img 
            onClick = { () => setSearchValue('')}
            className="cu-p clear" src="/img/btn-remove.svg" alt="Clear" />}
            <input placeholder="Поиск..." 
            onChange ={onChangeSearchValue} value ={searchValue}
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
          .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
          <Card  key ={index}
          title = {item.title} 
          price ={item.price} 
          imageUrl ={item.imageUrl}
          onFavorite = {()=> console.log("Favorite")}
          onPlus = {(obj)=> onAddToCart(obj)}
          />))}
          
        </div>
      </div>
    </div>
  );
}

export default App;
