import React, { useState } from "react";
import { fakeData } from "../../fakeData/fakeData";
import ImageCart from "../ImageCart/ImageCart";

const Destination = () => {
  const [destinations] = useState(fakeData);

  return (
    <div className="display">
      {destinations.map((dst) => (
        <ImageCart destination={dst}></ImageCart>
      ))}
    </div>
  );
};

export default Destination;
