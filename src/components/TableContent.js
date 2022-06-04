import React from "react";
import { useState, useEffect, useContext, useRef } from "react";
import "../CSS-files/tablecontent.css";
import "../CSS-files/search.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { log } from "../App";
import { blue } from "@mui/material/colors";
const url1 = process.env.BACKEND_URL+'/Allproperties';

function Tablecontent({ userEmail, userName }) {
  console.log(userEmail, userName);
  const btnref = useRef({});
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  // const [property, setProperty] = useState([]);
  //
  //
  const getAllProperties = async () => {
    try {
      const response = await axios.get('https://real-estate-22.herokuapp.com/Allproperties', { withCredentials: true });

      const result = response.data.user_properties;
      setItems(result);
    } catch (error) {
      console.log(error.response);
      if (error.response.status == 403) {
        navigate("/");
      }
    }
  };
  useEffect(() => {
    // if (!islog) {
    //   navigate("/");
    // }
    getAllProperties();
  }, []);

  const searchHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      const response = await axios.get(`https://real-estate-22.herokuapp.com/search/${key}`, {
        withCredentials: true,
      });
      // console.log(response);
      const result = response.data;
      console.log(result);
      if (result) {
        setItems(result);
      }
    }
  };

  const handleClick = (id) => {
    const res = axios.put(
      `https://real-estate-22.herokuapp.com/toggleStatus/${id}`,
      {},
      {
        withCredentials: true,
      }
    );
  };

  const handleEdit = (PPDID) => {
    // setEditID(id);
    navigate(`/form/${PPDID}/${userEmail}/${userName}`);

    // const res = axios.put(
    //   `http://localhost:8000/toggleStatus/${id}`,
    //   {},
    //   {
    //     withCredentials: true,
    //   }
    // );
  };
  //
  //
  //
  const handleAddNew = () => {
    navigate(`/form/${userEmail}/${userName}`);
  };
  //
  //
  //

  return (
    <div className="tablecontent">
      <form class="search-form">
        <input
          type="text"
          id="search"
          placeholder="Search PPD ID"
          onChange={searchHandle}
        />

        <button
          className=" add-user"
          type="submit"
          onClick={() => {
            handleAddNew();
          }}
        >
          + Add Property
        </button>
      </form>
      <tbody>
        <tr>
          <th>PPDID</th>
          <th>Image</th>
          <th>Property</th>
          <th>Contact</th>
          <th>Area</th>
          <th>Views</th>
          <th>Status</th>
          <th>DaysLeft</th>
          <th>Action</th>
        </tr>
        {items.length > 0 ? (
          items.map((item, i) => (
            <tr key={i}>
              <td>{item.PPDID}</td>
              <td>
                <img
                  style={{ margin: "10px 10px 0px 20px" }}
                  src="/icons/blank-image.png"
                  alt="no image"
                />
              </td>
              <td>{item.Property}</td>
              <td>{item.Contact}</td>
              <td>{item.Area}</td>
              <td>{item.Views}</td>
              <td>
                <button
                  style={{
                    color:'blue',
                    width: "90px",
                    height: "30px",
                    borderRadius: "10px",
                    border: "1px solid #eceaea",
                  }}
                  key={i}
                  ref={(node) => {
                    btnref.current[i] = node;
                  }}
                  onClick={() => {
                    btnref.current[i].textContent == "Unsold"
                      ? (btnref.current[i].textContent = "Sold")
                      : (btnref.current[i].textContent = "Unsold");
                    handleClick(item._id);
                  }}
                >
                  {item.Status}
                </button>
              </td>
              <td>{item.DaysLeft}</td>
              <td>
                <img
                  style={{
                    margin: "5px 10px 0px 20px",
                    width: "20px",
                    cursor: "pointer",
                  }}
                  src="/icons/eye.png"
                  alt="no image"
                />
                <img
                  onClick={() => {
                    handleEdit(item.PPDID);
                  }}
                  style={{ margin: "5px 10px 0px 20px", cursor: "pointer" }}
                  src="/icons/edit.png"
                  alt="no image"
                />
              </td>
            </tr>
          ))
        ) : (
          <p className="no-res">No Result Found</p>
        )}
      </tbody>
    </div>
  );
}

export default Tablecontent;
