import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import Unit from "./Unit";
import Placeholder from "../images/home.jpg";

function SearchResults() {
    const [ results, setResults ] = useState();
    const { city } = useParams();
    console.log(city);
    const options = {
        method: 'POST',
        url: 'https://realtor.p.rapidapi.com/properties/v3/list',
        headers: {
          'content-type': 'application/json',
          "X-RapidAPI-Key": "a010d51f12msh19bbda2704386bcp14a7eejsn2d0694e86011",
          "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
        },
        data: `{"limit":12,"offset":0,"city":"${city}","status":["for_sale","ready_to_build"],"sort":{"direction":"desc","field":"list_date"}}`
      };
    //   Fetch Data
      useEffect(()=> {
        axios.request(options)
        .then(function (response) {
            console.log(response.data);
            setResults(response.data.data.home_search.results)
         })
         .catch(function (error) {
             console.error(error);
         });
      }, [city]);


      useEffect(()=> {
        axios.request(options)
        .then(function (response) {
            console.log(response.data);
            setResults(response.data.data.home_search.results)
         })
         .catch(function (error) {
             console.error(error);
         });
      }, []);


  return  (
    <div id='search-results'>
        <div className='container mt-5 mb-5'>
            <div className='row'>
        
                {results && results.map((home) => (<div className='col-12 col-md-6 col-lg-4 col-xl-4' key={home?.listing_id}><Unit image={home?.primary_photo?.href || Placeholder} name={home?.listing_id} price={home?.list_price} address={home?.location.address.line} city={home?.location.address.city} state={home?.location.address.state_code} country={home?.location.address.country} beds={home?.description.beds} bath={home?.description.baths} url={home?.listing_id} /></div>))}

            </div>
        </div>
    </div>
  )
}

export default SearchResults
