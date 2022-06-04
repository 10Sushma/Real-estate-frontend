import React from "react";
import "./Card.css";
import { useState } from "react";
import "../CSS-files/Card.css";

const Card = ({ props }) => {
  const { PPDID, property, contact, area, views, status, daysleft } = props;
  const [newStatus, setNewStatus] = useState(status);
  return (
    <div className="card-container">
      <div>
        <p>{PPDID}</p>
      </div>
      <div>
        <img src="/icons/blank-image.png" alt="" />
      </div>
      <div>
        <p>{property}</p>
      </div>
      <div>
        <p>{contact}</p>
      </div>
      <div>
        <p>{area}</p>
      </div>
      <div>
        <p>{views}</p>
      </div>
      <div>
        <button
          onClick={() =>
            newStatus == "sold" ? setNewStatus("unsold") : setNewStatus("sold")
          }
        >
          {newStatus}
        </button>
      </div>
      <div>
        <p>{daysleft}</p>
      </div>
      <div>
        <img src="/icons/eye.png" alt="" />
        <img src="/icons/edit.png" alt="" />
      </div>
    </div>
  );
};

export default Card;
