import React from "react";
import { FaRegCalendarAlt, FaThermometerEmpty } from "react-icons/fa";
function Card({ cardData }) {
  return (
    <div>
      <div className="col-12 col-md-4 d-grid justify-content-center mt-2 mt-md-0  w-100 arkaplan p-3">
        <p className="fs-7 ">
          <FaRegCalendarAlt className="me-2 mb-1" />
          {cardData.dt_txt.split(" ")[0].split("-").reverse().join("/")}
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${cardData.weather[0].icon}@2x.png`}
          alt=""
        />
        <p className="text-center">
          <FaThermometerEmpty className="me-1 text-ninth" />
          {cardData.main.temp} °C
        </p>
      </div>
    </div>
  );
}

export default Card;
