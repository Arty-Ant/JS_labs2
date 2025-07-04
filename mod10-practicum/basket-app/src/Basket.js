export class Basket{
  constructor(element, items){
    this.element=element;
    this.items=items;
  }
  render(){
    this.element.innerHTML = '<h2>Корзина</h2>'
    const self = this; //чтоб избежать ошибки с this
    let summa = 0;

    function handlerBtnSub(ev) {
      const btn = ev.target
      const id = btn.getAttribute('data-id')
      const item = self.items.find((item) => item.id == id)
      if (item.qty > 0) {item.qty --}
      self.render()
    }
    function handlerBtnAdd(ev) {
      const btn = ev.target
      const id = btn.getAttribute('data-id')
      const item = self.items.find((item) => item.id == id)
      item.qty ++
      self.render()
    }

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
      <button data-id='${id}' class="btnSub">-</button>
      ${qty}
      <button data-id='${id}' class="btnAdd">+</button>
      </div>
      <div class='total'>${price * qty}</div>
      `

      divItem
        .querySelector('.btnSub')
        .addEventListener('click', handlerBtnSub)
      divItem
        .querySelector('.btnAdd')
        .addEventListener('click', handlerBtnAdd)

      summa = summa + price * qty
      self.element.appendChild(divItem)
    })
      const divItem = document.createElement('div')
      divItem.className = 'item summary'
      divItem.innerHTML = `Сумма <strong>${summa.toFixed(2)}</strong>`
      self.element.appendChild(divItem)
  }
}