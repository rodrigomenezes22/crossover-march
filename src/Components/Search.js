import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Unit from "./Unit";
import { useState } from "react";

function Search() {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if(inputValue !== "") {
      navigate(`/search/${inputValue}`);
    }
  };

  return (
    <div>
      <div class="col-lg-9 text-center position-absolute top-50 start-50 translate-middle">
        <h1 class="heading aos-init aos-animate" data-aos="fade-up">
          Easiest way to find your dream home
        </h1>
        <form
          action="#"
          class="narrow-w form-search d-flex align-items-stretch mb-3 gap-2"
          data-aos="fade-up"
          data-aos-delay="200"
          onSubmit={handleSearchSubmit}
        >
          <input
            type="text"
            class="form-control px-4"
            placeholder="Your City. e.g. New York"
            onChange={handleInputChange}
          />
          <button type="submit" class="btn search-btn">
            Search
          </button>
          {}
        </form>
      </div>
    </div>
  );
}

export default Search;
