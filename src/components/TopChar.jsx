import React, { useState, useEffect } from 'react'

function TopChar() {
  const [topChar, setTopChar] = useState([])

  // useEffect(() => {
  //   fetch('https://api.jikan.moe/v4/top/characters?limit=10').then(r => r.json()).then(d=> setTopChar(d.data))
  // }, [])

  return (
    <div>
      <h2>Top 10 Characters</h2>
      {(topChar[1] != null) ? <img src={topChar[1].images.jpg.image_url} alt="" /> : ''}
      {(topChar != null) ? (topChar.map((char,i) => <p key={i}>{char.name}</p>)) : ''}
    </div>
  )
}

export default TopChar
