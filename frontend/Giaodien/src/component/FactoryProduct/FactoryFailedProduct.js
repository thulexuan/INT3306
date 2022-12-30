import React, { useState } from "react";
import { useEffect } from "react";
//import "../css/table.css";
//import "../css/style.css";
//import Popup from "reactjs-popup";
//import Aproducts from "./Aproducts";
import axios from "axios";
import { set } from "react-hook-form";

export default function FactoryFailedProduct() {
    const [FactoryFailedProduct, setFactoryFailedProduct] = useState([]);
    var idb = localStorage.getItem("place_code");
    useEffect(() => {
        refreshFactoryFailedProduct();
    }, []);

    function refreshFactoryFailedProduct() {
        const ProjectAPI = axios
            .get(
                `http://localhost/ProductionMove/ProductionMove/public/api/factory/view_failed_products/${idb}`
            )
            .then((res) => setFactoryFailedProduct(res.data))
            .catch((err) => console.log(err));
    }
    const [post, setPost] = useState([]);

    return (
        <div col-md-9 col-sm-8 col-xs-12>
            <h3>PRODUCT LIST</h3>
            <table id="product-table">
                <thead>
                    <tr>
                        <th scope="col">Product code</th>
                        <th scope="col">Product line</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>

                <tbody>
                    {FactoryFailedProduct.map((e, index) => (
                        <tr key={index}>
                            <td>{e.product_code}</td>
                            <td>{e.product_line}</td>
                            <td>{e.product_name}</td>
                            <td>{e.brand}</td>
                            <td>{e.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}