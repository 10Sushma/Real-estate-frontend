import React from "react";
import "../CSS-files/TableHeader.css";

const TableHeader = () => {
  return (
    <div className="headers-container">
      <div>
        <h4>PPD ID</h4>
      </div>
      <div>
        <h4>Image</h4>
      </div>
      <div>
        <h4>Property</h4>
      </div>
      <div>
        <h4>Contact</h4>
      </div>
      <div>
        <h4>Area</h4>
      </div>
      <div>
        <h4>Views</h4>
      </div>
      <div>
        <h4>Status</h4>
      </div>
      <div>
        <h4>Days Left</h4>
      </div>
      <div>
        <h4>Actions</h4>
      </div>
    </div>
  );
};

export default TableHeader;
