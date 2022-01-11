import React, { useState } from 'react'
import Anime from './Anime'

function SearchAnime() {
  const [search, setSearch] = useState('')
  const [animes, setAnime] = useState([])
  
  function hasSpace(s) {
    return s.trim().replace(/\s+/g, '+')
  }

  const select = 'anime' // going to use to change between anime and manga search
  // order_by "mal_id" "title" "type" "rating" "start_date" "end_date" "episodes" "score" "scored_by" "rank" "popularity" "members" "favorites"
  // type "tv" "movie" "ova" "special" "ona" "music"
  const url = `https://api.jikan.moe/v4/${select}?q=${hasSpace(search)}&order_by=popularity&type=tv`

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(url).then(r => {
      r.json().then(d=> setAnime(d.data))
    })
  }

  return (
    <div>
      <h2>Search Anime</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
      </form>
      <div className='card_grid'>
        {animes.map((anime) => <Anime anime={anime} key={anime.mal_id} />)}
      </div>
    </div>
  )
}

export default SearchAnime
