import React from "react";
import { useContext } from "react";
import {
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaThermometerEmpty,
} from "react-icons/fa";
import { WiStrongWind, WiBarometer, WiHumidity } from "react-icons/wi";
import { GiPerson } from "react-icons/gi";
import SearchContext from "../context/SearchContext";
import Card from "./Card";

function ShowWeather() {
  const { data } = useContext(SearchContext);

  return (
    <div className="container">
      <div className="row mt-5">
        {data === null ? (
          <p>Şehir gir</p>
        ) : (
          <>
            <div className="col-8 mx-auto d-md-flex text-third justify-content-md-between arkaplan py-3">
              <div className="col-12 col-md-6">
                <div className="col-12 d-grid justify-content-center">
                  <p className="fs-6">
                    <FaMapMarkerAlt className="me-2 mb-1 text-ninth" />
                    {data.city.name} / {data.city.country}
                  </p>
                  <p className="fs-7">
                    <FaRegCalendarAlt className="me-2 mb-1" />
                    {data.list[0].dt_txt
                      .split(" ")[0]
                      .split("-")
                      .reverse()
                      .join("/")}
                  </p>
                  <hr />
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}
                    alt=""
                  />
                  <div className="d-grid align-items-end">
                    <p className="text-center">
                      {data.list[0].weather[0].main}
                    </p>
                    <p>
                      <FaThermometerEmpty className="me-1 text-ninth" />
                      {data.list[0].main.temp} °C
                    </p>
                  </div>
                </div>
              </div>
              <hr className="col-6 mx-auto d-md-none" />
              <div className="col-12 col-md-4 mt-3 mt-md-0 d-grid align-items-center mx-auto border-md-start">
                <p className="d-flex justify-content-between">
                  <span>
                    <WiStrongWind className="fs-4 mb-1 me-2" />
                    Wind Speed
                  </span>
                  <span>{data.list[0].wind.speed} m/s</span>
                </p>
                <p className="d-flex justify-content-between">
                  <span>
                    <GiPerson className="fs-4 mb-1 me-2" />
                    Felt Temperature
                  </span>
                  <span>{data.list[0].main.feels_like} °C</span>
                </p>
                <p className="d-flex justify-content-between">
                  <span>
                    <WiBarometer className="fs-3 mb-1 me-2 text-ninth" />
                    Pressure
                  </span>
                  <span>{data.list[0].main.pressure} hPa</span>
                </p>
                <p className="d-flex justify-content-between">
                  <span>
                    <WiHumidity className="fs-3 mb-1 me-2 text-tenth" />
                    Humidity
                  </span>
                  <span>{data.list[0].main.humidity} %</span>
                </p>
              </div>
            </div>
            <div className="col-10 mx-auto d-md-flex justify-content-between mt-3 text-white">
              <Card cardData={data.list[0]} />
              <Card cardData={data.list[8]} />
              <Card cardData={data.list[16]} />
              <Card cardData={data.list[24]} />
              <Card cardData={data.list[32]} /> 
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ShowWeather;
