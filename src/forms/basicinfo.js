import React from "react";
import { Link } from "react-router-dom";
import "../CSS-files/basicinfo.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import "../App.css";

function Basicinfo({ formData, setFormData, userEmail, userName }) {
  return (
    <div className="App">
      <Sidebar />
      <div className="midle">
        <Header userEmail={userEmail} userName={userName} />
        <div className="stages">
          <div className="head">ADD NEW PROPERTY</div>
          <div className="stage">
            <button
              className="bnt"
              style={{ backgroundColor: "rgb(134, 200, 233)", color: "white" }}
            >
              Basic Info
            </button>
            <button className="bnt">Property Detail</button>
            <button className="bnt">Genaral Info</button>
            <button className="bnt">Location Info</button>
          </div>
        </div>
        <form className="form">
          <div className="content-1">
            <div className="col1">
              <div className="row">
                <div>
                  <label>Property Type</label>
                </div>
                <div>
                  <select
                    name="dropdown"
                    className="text"
                    value={formData.Property}
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, Property: e.target.value })
                    }
                  >
                    <option selected >Select Property Type</option>
                    <option>Flat</option>
                    <option>House</option>
                    <option>Plot</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Price </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="text"
                    placeholder="Example : 1000"
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Property Age</label>
                </div>
                <div>
                  <select name="dropdown" className="text">
                    <option selected>Select Property Age</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Propert Description</label>
                </div>
                <div>
                  <input type="text" className="text" />
                </div>
              </div>
            </div>

            <div className="col2">
              <div className="row">
                <div>
                  <label>Negotiable</label>
                </div>
                <div>
                  <select name="dropdown" className="text">
                    <option selected>Select Negotiable</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Onwnership</label>
                </div>
                <div>
                  <select name="dropdown" className="text">
                    <option selected>Select Onwnership</option>
                    <option>Private</option>
                    <option>Government</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Property Approved</label>
                </div>
                <div>
                  <select name="dropdown" className="text">
                    <option selected>Property Approved</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Bank Loan</label>
                </div>
                <div>
                  <select name="dropdown" className="text">
                    <option selected>Bank Loan</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Basicinfo;
