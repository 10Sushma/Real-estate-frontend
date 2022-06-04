import React from "react";
import Sidebar from "./sidebar.js";
import Header from "./header.js";
import "../CSS-files/header.css";
import "../CSS-files/sidebar.css";
import { Link } from "react-router-dom";
import "../CSS-files/PropertyListing.css";
import "../App.css";
import Search from "./search.js";
import TableHeader from "./TableHeader.js";
import TableContent from "./TableContent.js";
import { useNavigate, useParams } from "react-router-dom";

const PropertyListing = () => {
  const { userEmail, userName } = useParams();
  console.log(userEmail, userName);
  return (
    <div className="App">
      <Sidebar />
      <div className="midle">
        <Header userEmail={userEmail} userName={userName} />
        <TableContent userEmail={userEmail} userName={userName} />
      </div>
    </div>
  );
};

export default PropertyListing;
