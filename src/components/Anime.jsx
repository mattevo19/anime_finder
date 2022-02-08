import React from "react";

function Anime(props) {
  const { anime } = props;
  return (
    <article>
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure className="mb-4 block">
          <img
            className="m-auto h-56 
            rounded object-cover shadow-lg shadow-purple-900 duration-300 hover:scale-105 hover:shadow-purple-400"
            src={anime.images.jpg.image_url}
            alt={anime.title}
          />
        </figure>
        <h3 className="text-center">{anime.title}</h3>
      </a>
    </article>
  );
}

export default Anime;
