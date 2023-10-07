import { useId, useState } from 'react'

import { useFilters } from '../hooks/useFilters'

import './Filters.css'

// eslint-disable-next-line react/prop-types
function Filters () {
  const [minPrice, setMinPrice] = useState(0)
  const { setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = event => {
    setMinPrice(event.target.value)
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = event => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price min.</label>
        <input
          type='range'
          id={minPriceFilterId}
          name='price'
          min='0'
          max='1800'
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor='category'>Category</label>
        <select
          name='category'
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option value='all'>All</option>
          <option value='groceries'>Groceries</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
