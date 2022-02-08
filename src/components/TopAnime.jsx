import React, { useState, useEffect } from "react";

function TopAninme() {
  const [topAnime, setTopAnime] = useState([]);

  const GetTopAnime = async () => {
    await fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity")
      .then((res) => res.json())
      .then((d) => setTopAnime(d.top.slice(0, 5)));
  };
  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <nav className="px-4">
      <h3 className="mb-2 text-2xl font-bold text-purple-900">Top 5 Anime</h3>
      {topAnime != null
        ? topAnime.map((anime) => {
            return (
              <a
                href={anime.url}
                className="mb-2 block rounded-xl bg-black px-2 py-2 text-slate-300 transition duration-300 hover:bg-purple-900 hover:text-pink-500"
                target="_blank"
                rel="noreferrer"
                key={anime.mal_id}
              >
                {anime.title}
              </a>
            );
          })
        : ""}
    </nav>
  );
}

export default TopAninme;
