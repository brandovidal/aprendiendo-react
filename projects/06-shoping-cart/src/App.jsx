import { useContext, useState } from 'react'

import { products as initialProducts } from './mocks/products.json'

import Products from './components/Products'
import Header from './components/Header'
import { FiltersContext } from './context/filters'

function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)
  console.log({ filters })

  const filterProducts = products => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return { filterProducts, setFilters }
}

function App () {
  const [products, setProducts] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
