import React, { useState, useEffect } from 'react'

function TopManga() {
  const [topManga, setTopManga] = useState([])

  // useEffect(() => {
  //   fetch('https://api.jikan.moe/v4/top/manga?limit=10').then(r => r.json()).then(d=> setTopManga(d.data))
  // }, [])

  return (
    <div>
      <h2>Top 10 Manga</h2>
      {(topManga != null) ? (topManga.map((Manga,i) => <p key={i}>{Manga.title}</p>)) : ''}
    </div>
  )
}

export default TopManga
