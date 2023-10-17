import { useEffect, useState } from 'react'

import './App.css'

const NAVIGATION_EVENT = 'pushState'

function navigate (href) {
  window.history.pushState({}, '', href)

  const navigationEvent = new Event(NAVIGATION_EVENT)
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <button onClick={() => navigate('/about')}>Ir a About</button>
    </>
  )
}

function AboutPage () {
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
      <button onClick={() => navigate('/')}>Ir a Home</button>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATION_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_EVENT, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
