import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Agents from "./Agents";
import ItemDetails from "./ItemDetails";
function Home() {
  return (
    <div>
      <ItemDetails/>
      <Agents />
    </div>
  );
}

export default Home;
