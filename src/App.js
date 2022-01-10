import React from "react"

import Header from "./components/Header"
import SearchAnime from "./components/SearchAnime"
import TopAnime from "./components/TopAnime"
import TopChar from "./components/TopChar"
import TopManga from "./components/TopManga"

function App() {
  return (
    <div className="App">
      <Header />
      <aside>
        <TopAnime />
        {/* <TopManga /> */}
        {/* <TopChar/> */}
      </aside>
      <main>
        <SearchAnime />
      </main>
    </div>
  )
}

export default App
