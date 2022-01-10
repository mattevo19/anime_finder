import React, { useState, useEffect } from 'react'

function TopAninme() {
  const [topAnime, setTopAnime] = useState([])

  const GetTopAnime = async () => {
    await fetch('https://api.jikan.moe/v4/top/anime?limit=5')
      .then(res => res.json()).then(d=> setTopAnime(d.data))
  }
  useEffect(() => {
    GetTopAnime();
  }, [])

  return (
    <div>
      <h2>Top 5 Anime</h2>
      {(topAnime != null) ? (topAnime.map((anime) => <a href={anime.url} key={anime.mal_id}>{anime.title}</a>)) : ''}
    </div>
  )
}

export default TopAninme
