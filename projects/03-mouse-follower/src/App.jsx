import { useEffect, useState } from 'react'

import './App.css'

function App () {
  const [enable, setEnable] = useState(false)

  useEffect(() => {
    console.log({ enable })
  }, [enable])

  return (
    <>
      <h1>Project 3</h1>

      <div
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: 'translate(0px, 0px)'
        }}
      />
      <button onClick={() => setEnable(!enable)}>
        {enable ? 'Disable' : 'Enable'} follow pointer
      </button>
    </>
  )
}

export default App
