import React from 'react'

function Anime(props) {
  const { anime } = props
  return (
    <div className='card'>
      <a href={anime.url} target='_blank' rel='noreferrer'>
        <img src={anime.images.jpg.image_url} alt={anime.title} />
        <h3>{anime.title}</h3>
      </a>
    </div>
  )
}

export default Anime
