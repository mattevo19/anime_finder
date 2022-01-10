import React from 'react'

function Anime(props) {
  const { anime } = props
  return (
    <div className='card'>
      {anime.title}
      <img src={anime.images.jpg.image_url} alt={anime.title} />
    </div>
  )
}

export default Anime
