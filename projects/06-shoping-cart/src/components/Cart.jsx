import { useContext, useId } from 'react'

import { CartIcon, ClearCartIcon } from './Icons'

import { CartContext } from '../context/cart'

import './Cart.css'

// eslint-disable-next-line react/prop-types
function CartItem ({ thumbnail, price, title, quantity, addToCart } = {}) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

function Cart () {
  const cartChekboxId = useId()

  const { cart, addToCart, clearCart } = useContext(CartContext)

  return (
    <>
      <label className='cart-button' htmlFor={cartChekboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartChekboxId} hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export { Cart }
