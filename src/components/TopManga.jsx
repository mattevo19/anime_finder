import React, { useState, useEffect } from 'react'

function TopManga() {
  const [topManga, setTopManga] = useState([])

  useEffect(() => {
    fetch('https://api.jikan.moe/v3/top/manga/1/bypopularity').then(r => r.json()).then(d=> setTopManga(d.top.slice(0,10)))
  }, [])

  return (
    <div>
      <h2>Top 10 Manga</h2>
      <ol>
        {(topManga != null) ? (topManga.map((manga,) => <li key={manga.mal_id}><a href={manga.url}>{manga.title}</a></li>)) : ''}
      </ol>
    </div>
  )
}

export default TopManga
