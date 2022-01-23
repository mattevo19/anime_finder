import React from 'react'

function Anime(props) {
  const { anime } = props
  return (
    <article>
      <a href={anime.url} target='_blank' rel='noreferrer'>
        <figure className='block mb-4'>
          <img className='h-56 m-auto rounded shadow-lg shadow-purple-900 duration-300 hover:shadow-purple-400 hover:scale-105 object-cover' src={anime.images.jpg.image_url} alt={anime.title} />
        </figure>
        <h3 className='text-center'>{anime.title}</h3>
      </a>
    </article>
  )
}

export default Anime
