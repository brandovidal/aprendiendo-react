import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <div>App de gatitos</div>

      <button onClick={handleClick}>Get cat</button>

      {fact && <p>{fact}</p>}

      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first word for ${fact}`}
        />
      )}
    </main>
  )
}

export default App
