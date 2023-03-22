import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Home() {
  return (
    <div>
      <Link to="/search/chicago">Chicago</Link>
    </div>
  );
}

export default Home;
