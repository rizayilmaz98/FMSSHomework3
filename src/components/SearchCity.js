import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { useContext } from "react";
import SearchContext from "../context/SearchContext";
import axios from "axios";

function SearchCity() {
  const { setSearch } = useContext(SearchContext);
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(city);
    setCity("");
  };

  const handleMap = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
      function onSuccess(position) {
        axios
          .get(
            `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=4537fae0694043f79416346a11883fe6`
          )
          .then((res) => setSearch(res.data.results[0].components.county));
      }
      function onError(error) {
        console.log(error);
      }
    } else {
      alert("Tarayıcınız bu hizmeti desteklemiyor !!!");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p className="text-center fs-4 text-fourth mt-4">Weather App</p>
        </div>
        <div className="col-10 col-md-6 mx-auto mt-4 d-flex justify-content-between">
          <div className="col-11 d-flex justify-content-center">
            <form className="input-group mb-3" onSubmit={handleSubmit}>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="form-control"
                placeholder="Search City or County"
                aria-label="Search City"
                aria-describedby="basic-addon2"
              />
              <button
                className="input-group-text"
                type="submit"
                id="basic-addon2"
              >
                <BsSearch />
              </button>
            </form>
          </div>
          <div className="col-2 col-md-1 py-1 py-md-0 mx-auto d-flex justify-content-center">
            <span
              className="fs-3 text-white cursor"
              title="Find My Location"
              onClick={handleMap}
            >
              <BiMap className="ms-2 mb-3 " />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCity;
