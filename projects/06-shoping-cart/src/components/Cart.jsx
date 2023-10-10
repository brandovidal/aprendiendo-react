import { useId } from 'react'

import { CartIcon, ClearCartIcon } from './Icons'

import './Cart.css'

function Cart () {
  const cartChekboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartChekboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartChekboxId} hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://i.dummyjson.com/data/products/2/thumbnail.jpg'
              alt='Iphone'
            />
            <div>
              <strong>Iphone</strong> - $399
            </div>
            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export { Cart }
