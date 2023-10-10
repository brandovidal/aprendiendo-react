import { useContext } from 'react'
import { AddToCartIcon } from './Icons'

import { CartContext } from '../context/cart'

import './Products.css'

// eslint-disable-next-line react/prop-types
function Products ({ products = [] }) {
  const { addCart } = useContext(CartContext)

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - <span>$ {product.price}</span>
            </div>
            <div>
              <button onClick={() => addCart(product)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export { Products }
