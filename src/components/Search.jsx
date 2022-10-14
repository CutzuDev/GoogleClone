import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Search({ hideButtons = false }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchButton = (e) => {
    e.preventDefault();

    console.log("Search button hit", search);

    navigate("/search");
  };

  // useEffect(() => {
  //   console.log(search);
  // }, [search]);

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__icon" />
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <MicIcon className="search__icon" />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button
            type="submit"
            onClick={searchButton}
            variant="outlined"
            color="grey"
          >
            Google Search
          </Button>
          <Button variant="outlined" color="grey">
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="search__buttons sb__hidden">
          <Button
            type="submit"
            onClick={searchButton}
            variant="outlined"
            color="grey"
          >
            Google Search
          </Button>
          <Button
            type="submit"
            onClick={searchButton}
            variant="outlined"
            color="grey"
          >
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
