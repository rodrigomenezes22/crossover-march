import React from "react";

function Unit({
  image,
  name,
  price,
  address,
  state,
  country,
  beds,
  bath,
  url,
  city,
}) {
  return (
    <div>
      <p>{image}</p>
    </div>
  );
}

export default Unit;
