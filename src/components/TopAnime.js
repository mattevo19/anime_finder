import React, { useState, useEffect } from 'react'

function TopAninme() {
  const [topAnime,setTopAnime] = useState([])

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/top/anime?limit=10').then(r => r.json()).then(d=> setTopAnime(d.data))
  }, [])

  return (
    <div>
      <h1>Top 10 Anime</h1>
      {/* {console.log(topAnime)} */}
      {(topAnime != null) ? (topAnime.map((anime,i) => <p key={i}>{anime.title}</p>)) : ''}
    </div>
  )
}

export default TopAninme
