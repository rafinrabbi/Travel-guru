import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./ImageCartDetails.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DestinationShortDetails = () => {
  return (
    <div >
      <h1 className="text-margin1">COX'S BAZAR</h1>
      <p>
        <small >
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it...
        </small>
      </p>
      <button className="bookingButton">
        <Link to="/destination/1" className="bookingButtonText">
          Booking{" "}
          <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faArrowRight} />
        </Link>
      </button>

      <h1 className="text-margin3">SHREEMANGAL</h1>
      <p>
        <small>
        It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja  ....
        </small>
      </p>
      <button className="bookingButton">
        <Link to="/destination/2" className="bookingButtonText">
          Booking{" "}
          <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faArrowRight} />
        </Link>
      </button>

      <h1 className="text-margin2">SUNDARBANS</h1>
      <p>
        <small>
        The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state o...
        </small>
      </p>
      <button className="bookingButton">
        <Link to="/destination/3" className="bookingButtonText">
          Booking{" "}
          <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faArrowRight} />
        </Link>
      </button>

    </div>
  );
};

export default DestinationShortDetails;
