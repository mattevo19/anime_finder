import React, { useState, useEffect } from 'react'

function TopManga() {
  const [topManga, setTopManga] = useState([])

  useEffect(() => {
    fetch('https://api.jikan.moe/v3/top/manga/1/bypopularity').then(r => r.json()).then(d=> setTopManga(d.top.slice(0,5)))
  }, [])

  return (
    <nav className='px-4'>
      <h3 className='text-2xl text-purple-900 mb-2'>Top 5 Manga</h3>
      {(topManga != null) ? 
        (topManga.map((manga,) => {
          return <a target="_blank"
            className='block px-2 py-2 text-slate-300 bg-black font-bold mb-2 rounded-xl transition duration-300 hover:bg-purple-900 hover:text-pink-500' 
            rel='noreferrer' 
            href={manga.url}
            key={manga.mal_id}
            >{manga.title}</a>})) : ''}
    </nav>
  )
}

export default TopManga
