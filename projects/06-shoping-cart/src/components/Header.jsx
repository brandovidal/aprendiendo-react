import Filters from './Filters'

// eslint-disable-next-line react/prop-types
function Header ({ changeFilters }) {
  return (
    <header>
      <h1>React Shop</h1>
      <Filters onChange={changeFilters} />
    </header>
  )
}

export default Header
