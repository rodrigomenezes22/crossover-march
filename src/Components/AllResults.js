import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import Unit from "./Unit";

function AllResults() {

    const [ results, setResults ] = useState();
    

    const options = {
        method: 'POST',
        url: 'https://realtor.p.rapidapi.com/properties/v3/list',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '60d8a2760bmshb7963e82b124735p173e03jsnab27911f181c',
          'X-RapidAPI-Host': 'realtor.p.rapidapi.com'
        },
        data: `{"limit":10,"offset":0,"city":"new york","status":["for_sale","ready_to_build"],"sort":{"direction":"desc","field":"list_date"}}`
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
      
    </div>
  )
}

export default AllResults
