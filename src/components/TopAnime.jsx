import React, { useState, useEffect } from 'react'

function TopAninme() {
  const [topAnime, setTopAnime] = useState([])

  const GetTopAnime = async () => {
    await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
      .then(res => res.json()).then(d=> setTopAnime(d.top.slice(0,10)))
  }
  useEffect(() => {
    GetTopAnime();
  }, [])

  return (
    <div>
      <h2>Top 10 Anime</h2>
      <ol>
        {(topAnime != null) ? (topAnime.map((anime) => <li  key={anime.mal_id}><a href={anime.url} key={anime.mal_id}>{anime.title}</a></li>)) : ''}
      </ol>
    </div>
  )
}

export default TopAninme
