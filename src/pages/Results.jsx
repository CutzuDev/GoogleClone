import { Link } from "react-router-dom";
import "./Results.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../components/useGoogleSearch";
import Response from "../response.js";
import GoogleLogo from "../assets/googlelogo.png";
import Search from "../components/Search";
import SearchIcon from "@mui/icons-material/Search";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
} from "@mui/icons-material";

function Results() {
  const [{ term }, dispatch] = useStateValue();
  // const term = "Tesla";

  // LIVE API CALL
  // const { data } = useGoogleSearch(term);

  const data = Response;

  const { items } = data;

  console.log(data);
  return (
    <div className="resultPage">
      <div className="resultPage__header">
        <Link className="resultPage__logo--container" to="/">
          <img src={GoogleLogo} alt="" className="resultPage__logo" />
        </Link>
        <div className="resultPage__headerBody">
          <Search hideButtons />
          <div className="resultPage__options">
            <div className="resultPage__optionsLeft">
              <div className="resultPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="resultPage__option">
                <Description />
                <Link to="/all">News</Link>
              </div>
              <div className="resultPage__option">
                <Image />
                <Link to="/all">Images</Link>
              </div>
              <div className="resultPage__option">
                <LocalOffer />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="resultPage__option">
                <Room />
                <Link to="/all">Maps</Link>
              </div>
              <div className="resultPage__option">
                <MoreVert />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="resultPage__optionsRight">
              <div className="resultPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="resultPage__option">
                <Link to="/settings">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        <div className="resultPage__results">
          <div className="resultPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} Results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </div>

          {data?.items.map((e) => (
            <div className="test_item" key={e.cacheId + Math.random}>
              {e.title}
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default Results;

// AIzaSyB7v5tQC27ZubQkTxH6-4rcC4NPLJQwLv8
// GET https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures
// b2c530a3dbf6b4640
