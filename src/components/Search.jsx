import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  const searchButton = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div className="search">
      <div className="search__input">
        <SearchIcon className="search__icon" />
        <input onChange={(e) => setSearch(e.target.value)} />
        <MicIcon className="search__icon" />
      </div>
      <div className="search__buttons">
        <Button onClick={searchButton} variant="outlined" color="grey">
          Google Search
        </Button>
        <Button variant="outlined" color="grey">
          I'm Feeling Lucky
        </Button>
      </div>
    </div>
  );
}

export default Search;
