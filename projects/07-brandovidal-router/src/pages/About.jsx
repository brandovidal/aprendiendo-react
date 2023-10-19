import { Link } from '../components/Link'

export function AboutPage () {
  return (
    <>
      <h1>About Page</h1>
      <div>
        <p>This is the about page</p>
        <img
          src='https://avatars.githubusercontent.com/u/65886822?v=4'
          alt='brandovidal'
        />
      </div>
      <Link to='/'>Ir a Home</Link>
    </>
  )
}
