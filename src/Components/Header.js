import NavBar from "./NavBar";
import "../App.css";
import ItemDetails from "./ItemDetails";
export default function Header() {
  return (
    <div>
      <NavBar />
      <div className="hero-section" id="home">
        <div className="hero-image">
          <div className="hero-text">

          </div>
        </div>
      </div>
      <ItemDetails/>
    </div>
  );
}
