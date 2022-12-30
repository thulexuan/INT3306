import React, { useState } from "react";
import { useEffect } from "react";
//import "../css/table.css";
//import "../css/style.css";
//import Popup from "reactjs-popup";
//import Aproducts from "./Aproducts";
import axios from "axios";
import { set } from "react-hook-form";

export default function FactoryStatisticByFactory() {
    const [FactoryStatistic, setFactoryStatistic] = useState([]);
    var idb = localStorage.getItem("place_code");
    useEffect(() => {
        refreshFactoryStatistic();
    }, []);

    function refreshFactoryStatistic() {
        const ProjectAPI = axios
            .get(
                `http://localhost/ProductionMove/ProductionMove/public/api/factory/statistic_failed_by_product_lines/${idb}`
            )
            .then((res) => setFactoryStatistic(res.data))
            .catch((err) => console.log(err));
    }
    const [post, setPost] = useState([]);

    return (
        <div col-md-9 col-sm-8 col-xs-12>
            <h3>PRODUCT LIST</h3>
            <table id="product-table">
                <thead>
                    <tr>
                        <th scope="col">Product line</th>
                        <th scope="col">The number of failed products</th>
                        <th scope="col">Ratio(%)</th>
                    </tr>
                </thead>

                <tbody>
                    {FactoryStatistic && FactoryStatistic.slice(0, FactoryStatistic.length - 2).map((e, index) => (
                        <tr key={index}>
                            <td>{e.product_line}</td>
                            <td>{e.num_failed_products}</td>
                            <td>{e.ratio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <table id="product-table">
                <thead>
                    <tr>
                        <th scope="col">Tổng sản phẩm lỗi</th>
                    </tr>
                </thead>

                <tbody>
                    {FactoryStatistic && FactoryStatistic.slice(FactoryStatistic.length - 2, FactoryStatistic.length - 1).map((e, index) => (
                        <tr key={index}>
                            <td>{e.num_failed_products}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <table id="product-table">
                <thead>
                    <tr>
                        <th scope="col">Sản phẩm nhiều lỗi nhất</th>
                    </tr>
                </thead>

                <tbody>
                    {FactoryStatistic && FactoryStatistic.slice(FactoryStatistic.length - 1, FactoryStatistic.length).map((e, index) => (
                        <tr key={index}>
                            {e.productline_failed_max.map((productline_failed_max, i) => (
                                <li key={e.productline_failed_max}>{productline_failed_max}</li>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}