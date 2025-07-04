export class Basket{
  constructor(element, items){
    this.element=element;
    this.items=items;
  }
  render(){
    this.element.innerHTML = '<h2>Корзина</h2>'
    const self = this; //чтоб избежать ошибки с this
    let summa = 0;

    this.items.forEach( function(item) {
      const{id, title, price, qty} = item
      
      //создать div контейнер для позиции товара
      const divItem = document.createElement('div')
      divItem.setAttribute('data-id', id)
      divItem.className = 'item'
      divItem.innerHTML = `
      <div class='id'>${id}</div>
      <div class='title'>${title}</div>
      <div class='price'>${price}</div>
      <div class='qty'>
      <button data-id='${id}'>-</button>
      ${qty}
      <button data-id='${id}'>+</button>
      </div>
      <div class='total'>${price * qty}</div>
      `
      summa = summa + price * qty
      self.element.appendChild(divItem)
    })
      const divItem = document.createElement('div')
      divItem.className = 'item summary'
      divItem.innerHTML = `Сумма <strong>${summa.toFixed(2)}</strong>`
      self.element.appendChild(divItem)
  }
}