import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import "../CSS-files/locationinfo.css";
import "../App.css";

function Locationinfo({ userEmail, userName }) {
  return (
    <div className="App">
      <Sidebar />
      <div className="midle">
        <Header userEmail={userEmail} userName={userName} />
        <div className="stages">
          <div className="head">ADD NEW PROPERTY</div>
          <div className="stage">
            <button className="bnt">Basic Info</button>
            <button className="bnt">Property Detail</button>
            <button className="bnt">Genaral Info</button>
            <button
              className="bnt"
              style={{ backgroundColor: "rgb(134, 200, 233)", color: "white" }}
            >
              Location Info
            </button>
          </div>
        </div>

        <form className="form">
          <div className="content-1">
            <div className="col1">
              <div className="row">
                <div>
                  <label>Email</label>
                </div>
                <div>
                  <input type="text" className="text" placeholder="Email" />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Area</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="text"
                    placeholder="Select Area"
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Address</label>
                </div>
                <div>
                  <input type="text" className="text" placeholder="Address" />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Latitude</label>
                </div>
                <div>
                  <input type="text" className="text" placeholder="Latitude" />
                </div>
              </div>
            </div>
            <div className="col2">
              <div className="row">
                <div>
                  <label>City</label>
                </div>
                <div>
                  <input type="text" className="text" />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>PinCode</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="text"
                    placeholder="Select PinCode"
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Landmark</label>
                </div>
                <div>
                  <input type="text" className="text" placeholder="Landmark" />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Longitude</label>
                </div>
                <div>
                  <input type="text" className="text" placeholder="Lognitude" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Locationinfo;
