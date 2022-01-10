import React, { useState } from 'react'
import Anime from './Anime'

function SearchAnime() {
  const [search, setSearch] = useState('')
  const [animes, setAnime] = useState([])
  
  function hasSpace(s) {
    return s.trim().replace(/\s+/g, '+')
  }

  const url = `https://api.jikan.moe/v4/anime?q=${hasSpace(search)}&sort=asc`

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(url).then(r => {
      r.json().then(d=> setAnime(d.data))
    })
  }

  return (
    <div className='child1'>
      <h2>Search Anime</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
      </form>
      <div>
        {animes.map((anime) => <Anime anime={anime} key={anime.mal_id} />)}
      </div>
    </div>
  )
}

export default SearchAnime
