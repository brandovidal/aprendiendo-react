import { Link } from '../components/Link'

export function HomePage () {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <Link to='/about'>Ir a About</Link>
    </>
  )
}
