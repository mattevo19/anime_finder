import React from "react"

import Header from "./components/Header"
import SearchAnime from "./components/SearchAnime"
import TopAnime from "./components/TopAnime"
import TopManga from "./components/TopManga"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex">
        <aside className="flex-1 max-w-xs">
          <TopAnime />
          <TopManga />
        </aside>
        <SearchAnime />
      </div>
    </div>
  )
}

export default App
