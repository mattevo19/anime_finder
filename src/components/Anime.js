import React from 'react'

function Anime(props) {
  return (
    <li>
      {props.anime.title}
      <img src={props.anime.images.jpg.image_url} alt={props.anime.title} />
    </li>
  )
}

export default Anime
