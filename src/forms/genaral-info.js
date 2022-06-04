import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import "../CSS-files/genaralinfo.css";
import "../App.css";

function Genaralinfo({ formData, setFormData, userEmail, userName }) {
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
            <button
              className="bnt"
              style={{ backgroundColor: "rgb(134, 200, 233)", color: "white" }}
            >
              Genaral Info
            </button>
            <button className="bnt">Location Info</button>
          </div>
        </div>
        <form className="form">
          <div className="content-1">
            <div className="col1">
              <div className="row">
                <div>
                  <label>Name</label>
                </div>
                <div>
                  <input type="text" className="text" placeholder="Owner" />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Posted By</label>
                </div>
                <div>
                  <input type="text" className="text" placeholder="Posted By" />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Feature Packages</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="text"
                    placeholder="Please Select"
                  />
                </div>
              </div>
            </div>

            <div className="col2">
              <div className="row">
                <div>
                  <label>Mobile</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="text"
                    placeholder="Enter Mobile No."
                    value={formData.Contact}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        Contact: Number(e.target.value),
                      })
                    }
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Sale Type</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="text"
                    placeholder="Please Select"
                  />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>PPD Packages</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="text"
                    placeholder="Please Select"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="camlogo">
            <img
              classname="cameraimg"
              style={{ width: "105px" }}
              src="https://tse3.mm.bing.net/th?id=OIP.D_aYL7lPeWNEDMQFZ2AvIAHaHa&pid=Api&P=0&w=168&h=168"
              alt="imga"
            />
            <div className="addphoto"> Add Photo</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Genaralinfo;
