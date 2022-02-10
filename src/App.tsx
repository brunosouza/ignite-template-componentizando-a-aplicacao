import { useState } from "react";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import "./styles/global.scss";

import "./styles/content.scss";

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const handleGenreChange = (genreId: number) => setSelectedGenreId(genreId);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar onHandleGenreChange={handleGenreChange} />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  );
}
