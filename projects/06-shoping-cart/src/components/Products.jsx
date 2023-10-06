import { AddToCartIcon } from './Icons'

import './Products.css'

// eslint-disable-next-line react/prop-types
function Products ({ products = [] }) {
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
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Products
