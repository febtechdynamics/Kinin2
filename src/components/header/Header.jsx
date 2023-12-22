import React from "react";
import image from "../../assets/KNN.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignIn,
  faUserPlus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="container">
      <div className="row align-items-center py-2">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <img src={image} alt="LOGO" className="img-fluid" />
        </div>
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 mt-2 mt-sm-0">
          <div className="input-group">
            <input
              type="text"
              placeholder="What Are You Looking For?"
              className="form-control"
            />
            <button className="btn btn-outline-secondary" type="button">
              Search
            </button>
          </div>
        </div>
        <div className="col-12 col-md-3 col-lg-5 mt-2 mt-md-0 d-flex justify-content-around">
          <button className="btn btn-light">
            <FontAwesomeIcon icon={faSignIn} className="me-1" />
            Login
          </button>
          <button className="btn btn-light">
            <FontAwesomeIcon icon={faUserPlus} className="me-1" />
            Register
          </button>
          <button className="btn btn-warning">
            <FontAwesomeIcon icon={faPlus} className="me-1" />
            Post AD
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
