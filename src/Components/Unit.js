import React, { useEffect } from 'react'
import { useState} from 'react';

function Unit({image, name, price, address, state, country, city,  beds, bath, url}) {

    const [ priceFormat, setPriceFormat ] = useState();
    
    // const formatPrice = (price) => {
    //     // Convert the price to a string, if it isn't already
    //     price = price.toString();
        
    //     // Split the price into its integer and decimal parts
    //     let parts = price.split(".");
    //     let integerPart = parts[0];
    //     let decimalPart = parts.length > 1 ? "." + parts[1] : "";
        
    //     // Add commas to the integer part
    //     integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        
    //     // Add a dollar sign and return the result
    //     return setPriceFormat("$" + integerPart + decimalPart);
    // }



    console.log(typeof price);
  return (
    <div className='listings'>
        <img src={image} className="img-fluid" alt={name} />
        <div className='listings-body'>
            <h2>${price}</h2>
            <h4>{address}</h4>
            <h3>{city} {state}, {country} </h3>
            <div className='amenities'>
            <span className="material-symbols-rounded">
            bedroom_child
            </span>
            {beds}
            <span className="material-symbols-rounded">
            bathtub
            </span>
            {bath}
            
            </div>
            <a className="btn btn-primary" href={url} target="_blank">View Details</a>
        </div>
    </div>
  )
}

export default Unit
