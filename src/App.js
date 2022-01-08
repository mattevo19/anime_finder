import React from "react"
import SearchAnime from "./components/SearchAnime"
import TopAnime from "./components/TopAnime"
import TopChar from "./components/TopChar"
import TopManga from "./components/TopManga"

function App() {
  return (
    <div className="App">
      <SearchAnime />
      <TopAnime />
      <TopManga />
      <TopChar/>
    </div>
  )
}

export default App
