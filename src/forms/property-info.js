import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import "../CSS-files/propertyinfo.css";
import "../App.css";

function Propertyinfo({ formData, setFormData, userEmail, userName }) {
  return (
    <div className="App">
      <Sidebar />
      <div className="midle">
        <Header userEmail={userEmail} userName={userName} />
        <div className="stages">
          <div className="head">ADD NEW PROPERTY</div>
          <div className="stage">
            <button className="bnt">Basic Info</button>
            <button
              className="bnt"
              style={{ backgroundColor: "rgb(134, 200, 233)", color: "white" }}
            >
              Property Detail
            </button>
            <button className="bnt">Genaral Info</button>
            <button className="bnt">Location Info</button>
          </div>
        </div>
        <form className="form">
          <div className="content-1">
            <div className="col1">
              <div className="row">
                <div>
                  <label>Length</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="text"
                    placeholder="Example:1000"
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Total Area</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="text"
                    placeholder="Example: 7500"
                    value={formData.Area}
                    onChange={(e) =>
                      setFormData({ ...formData, Area: Number(e.target.value) })
                    }
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>No. of BHK</label>
                </div>
                <div>
                  <select name="dropdown" className="text">
                    <option selected>Select No. of BHK</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Attached</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="text"
                    placeholder="Select Attached"
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Furnished</label>
                </div>
                <div>
                  <select name="dropdown" className="text">
                    <option selected>Select Furnished</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Lift</label>
                </div>
                <div>
                  <select name="dropdown" className="text">
                    <option selected>Select Lift</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Facing</label>
                </div>
                <div>
                  <select name="dropdown" className="text">
                    <option selected>Select Facing</option>
                    <option>East</option>
                    <option>West</option>
                    <option>south</option>
                    <option>North</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col2">
              <div className="row">
                <div>
                  <label>Breadth</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="text"
                    placeholder="Example : 100"
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Area Unit</label>
                </div>
                <div>
                  <select name="dropdown" className="text">
                    <option selected>Unit</option>
                    <option>Feet</option>
                    <option>meter</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div>
                  <label>No. of Floors</label>
                </div>
                <div>
                  <select name="dropdown" className="text">
                    <option selected>Select No. of Floors</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Western Toilet</label>
                </div>
                <div>
                  <select name="dropdown" className="text">
                    <option selected>Select Western Toilet</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Car Parking</label>
                </div>
                <div>
                  <select name="dropdown" className="text">
                    <option selected>Select Car Parking</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Electricity</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="text"
                    placeholder="Example: 3 Phase"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Propertyinfo;
