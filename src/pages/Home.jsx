import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";

function Home() {
  return (
    <div className="home">
      <div className="home__navbar">
        <ul className="home__navbar--left home__navbar">
          <div className="home__navbar--link">
            <Link to="/about">About</Link>
            <Link to="/store">Store</Link>
          </div>
        </ul>
        <ul className="home__navbar--right home__navbar">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </ul>
      </div>
      <div className="home__body"></div>
    </div>
  );
}

export default Home;
