import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";

export default function Aproducts({ value }) {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [idb, setIdb] = useState(1);

  useEffect(() => {
    axios
      .get(
        `http://localhost/ProductionMove/ProductionMove/public/api/admin/view_product/${idb}`
      )
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.log(error));
  }, [idb]);

  const clickHandler = () => {
    setIdb(id);
  };

  return (
    <>
      <div>
        <button className="btn" onClick={() => setIdb(value)}>
          Xem thông số
        </button>

        <p>ProductCode: {post.product_code}</p>
        <p>Cylinder: {post.cylinder}</p>
        <p>Drive Type: {post.drive_type}</p>
        <p>Tranmission: {post.transmission}</p>
        <p>Engine Type: {post.engine_type}</p>
        <p>Total Door: {post.total_door}</p>
        <p>Total Seat: {post.total_seats}</p>
        <p>Warranty year: {post.warranty_years}</p>
      </div>
    </>
  );
}