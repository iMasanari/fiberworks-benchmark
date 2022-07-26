import { useClientParams, useState } from '@imasanari/fiberworks'
import { Item } from './components/Item'
import { SearchBox } from './components/SearchBox'
import { itemMap, oneSetSize } from './data/items'
// import classes from './App.module.css'

function App() {
  const [input, setInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const { dataSetRepeat } = useClientParams()

  const onChange = (input: string) => {
    setInput(input)
    setSearchQuery(input.toLowerCase())
  }

  const itemKeys = Array.from(itemMap.keys()).slice(0, dataSetRepeat * oneSetSize)

  return (
    <div>
      <div className="App-pokemonList">
        {itemKeys.map((id) => {
          return <Item key={id} id={id} searchQuery={searchQuery} />
        })}
      </div>
      <footer className="App-footer">
        <p>
          Data is obtained from{' '}
          <a href="https://pokeapi.co/" rel="external">
            PokéAPI
          </a>
          .
        </p>
      </footer>
      <div className="App-searchBox">
        <SearchBox input={input} onChange={onChange} />
      </div>
    </div>
  )
}

export default App
