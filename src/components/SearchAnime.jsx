import React, { useState } from "react";
import Anime from "./Anime";

function SearchAnime() {
  const [search, setSearch] = useState("");
  const [animes, setAnime] = useState([]);

  function hasSpace(s) {
    return s.trim().replace(/\s+/g, "+");
  }

  const select = "anime"; // going to use to change between anime and manga search
  // order_by "mal_id" "title" "type" "rating" "start_date" "end_date" "episodes" "score" "scored_by" "rank" "popularity" "members" "favorites"
  // type "tv" "movie" "ova" "special" "ona" "music"
  const url = `https://api.jikan.moe/v4/${select}?q=${hasSpace(
    search
  )}&order_by=mal_id`;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url).then((r) => {
      r.json().then((d) => setAnime(d.data));
    });
  };

  return (
    <main className="flex-1 px-6">
      <div>
        <form className="flex justify-end" onSubmit={handleSubmit}>
          <input
            type="search"
            className="w-full max-w-sm	appearance-none rounded-full bg-black p-4 text-slate-300"
            placeholder="Search for an anime..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {animes.map((anime) => (
          <Anime anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </main>
  );
}

export default SearchAnime;
