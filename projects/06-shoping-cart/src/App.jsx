import { useState } from 'react'

import { products as initialProducts } from './mocks/products.json'

import Products from './components/Products'
import Header from './components/Header'
import { Footer } from './components/Footer'

import { useFilters } from './hooks/useFilters'

function App () {
  const [products, setProducts] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
