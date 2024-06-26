import { useContext } from 'react'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

import { CartContext } from '../context/cart'

import './Products.css'

// eslint-disable-next-line react/prop-types
function Products ({ products = [] }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext)

  function checkProductInCart (product) {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> -{' '}
                <span>$ {product.price}</span>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: isProductInCart ? 'tomato' : 'transparent'
                  }}
                  onClick={() => {
                    isProductInCart ? removeFromCart(product) : addToCart(product)
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export { Products }
