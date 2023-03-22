import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import Unit from "./Unit";


function SearchResults() {

    const [ results, setResults ] = useState();
    const { city } = useParams();
    console.log(city);
    const options = {
        method: 'POST',
        url: 'https://realtor.p.rapidapi.com/properties/v3/list',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '60d8a2760bmshb7963e82b124735p173e03jsnab27911f181c',
          'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
        },
        data: `{"limit":10,"offset":0,"city":"${city}","status":["for_sale","ready_to_build"],"sort":{"direction":"desc","field":"list_date"}}`
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
      }, []);


  return (
    <div>
        <div className='container'>
            <div className='row'>
        
                {results && results.map((home) => (<div className='col-12 col-md-6 col-lg-4 col-xl-4' key={home.listing_id}><Unit image={home?.primary_photo.href} name={home?.listing_id} price={home?.list_price} address={home?.location.address.line} city={home?.location.address.city} state={home?.location.address.state_code} country={home?.location.address.country} beds={home?.description.beds} bath={home?.description.baths} url={home?.href} /></div>))}

            </div>
        </div>
    </div>
  )
}

export default SearchResults
