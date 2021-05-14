import React, { useState, useEffect } from 'react'
import PokemonList from './PokemonList'
import Pagination from './Pagination'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [count, setCount] = useState(0); 
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    axios.get(currentPageUrl).then(res => {
      setLoading(false);
      setPokemon(res.data.results.map(p => p.name))
    })
  },[currentPageUrl])

  const prevPage = () => {
    let x = count - 20;
    setCount(x);
    setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon?offset=${x}&limit=20`)
  }
 
const nextPage = () => {
  let x = count + 20;
  setCount(x);
  setCurrentPageUrl(`https://pokeapi.co/api/v2/pokemon?offset=${x}&limit=20`)
}
 
  return (
    <>
      {loading === true ? <div>Loading...</div> : <PokemonList pokemon={pokemon}></PokemonList>}
      
      <Pagination count={count} prevButtonClicked={prevPage} nextButtonClicked={nextPage}></Pagination>
    </>
  )
}

export default App
