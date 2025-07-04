import './style.css'

import { Basket } from './Basket.js'

const app = document.querySelector('#app')
app.innerHTML = `Корзина загружается`

const items = [
  {id:1, title:'Товар 1', price: 100, qty:10},
  {id:2, title:'Товар 2', price: 2000, qty:5},
  {id:90, title:'Товар 90', price: 5000, qty:2},
]

const basket = new Basket(app, items)

basket.render()
