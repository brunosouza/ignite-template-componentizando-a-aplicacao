import { useEffect, useState } from "react";

import { Button } from "./components/Button";
import { MovieCard } from "./components/MovieCard";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import { api } from "./services/api";

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
