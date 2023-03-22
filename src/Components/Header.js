import NavBar from "./NavBar";
import SearchBar from "./SearchBar"
import "../App.css";

export default function Header() {
  return (
    <div>
      <NavBar />
      <div className="hero-section" id="home">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Property Finder</h1>
            <p> Find your dream home</p>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}
