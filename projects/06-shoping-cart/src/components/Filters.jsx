import { useState } from 'react'

import './Filters.css'

function Filters () {
  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = e => {
    setMinPrice(e.target.value)
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input type='range' id='price' name='price' min='0' max='1800' onChange={handleChangeMinPrice} />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor='category'>Category</label>
        <select name='category' id='category'>
          <option value='all'>All</option>
          <option value='home-decoration'>Home decoration</option>
          <option value='laptop'>Laptop</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
