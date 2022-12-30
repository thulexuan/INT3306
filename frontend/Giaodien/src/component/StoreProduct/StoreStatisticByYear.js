import React, { useState } from "react";
import { useEffect } from "react";
//import "../css/table.css";
//import "../css/style.css";
//import Popup from "reactjs-popup";
//import Aproducts from "./Aproducts";
import "../../css/style.css"
import axios from "axios";


export default function StoreStatisticByYear() {
    const [year, setYear] = useState([])
    const [StoreStatisticByYear, setStoreStatisticByYear] = useState([]);
    var idb = localStorage.getItem("place_code");
    useEffect(() => {
        refreshStoreStatisticByYear();
    }, [year]);

    function refreshStoreStatisticByYear() {
        const ProjectAPI = axios
            .get(
                `http://localhost/ProductionMove/ProductionMove/public/api/store/statistic_sold_products/${idb}/${year}`
            )
            .then((res) => setStoreStatisticByYear(res.data))
            .catch((err) => console.log(err));
    }
    const [post, setPost] = useState([]);


    return (

        <div col-md-9 col-sm-8 col-xs-12>

            <label className="select-selected-label">Choose a year:</label>

            <select id="selected" onChange={(d) => setYear(d.target.value)} className="custom-select select-selected">
                <option>year</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
            <h3>PRODUCT LIST</h3>

            <table id="product-table">
                <thead>
                    <tr>
                        <th scope="col">Month</th>
                        <th scope="col">The number of products</th>
                        <th scope="col">Ratio(%)</th>
                    </tr>
                </thead>

                <tbody>
                    {StoreStatisticByYear && StoreStatisticByYear.slice(0, StoreStatisticByYear.length - 2)?.map((e, index) => (
                        <tr key={index}>

                            <td>{e.month}</td>
                            <td>{e.num_of_sold_products} </td>

                            <td>{e.ratio}</td>

                        </tr>
                    ))}
                </tbody>
            </table>

            <table id="product-table">
                <thead>
                    <tr>
                        <th scope="col">Tổng sản phẩm bán</th>
                    </tr>
                </thead>

                <tbody>
                    {StoreStatisticByYear && StoreStatisticByYear.slice(StoreStatisticByYear.length - 1, StoreStatisticByYear.length).map((e, index) => (
                        <tr key={index}>
                            <td>{e.all_sold_products}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />

            <table id="product-table">
                <thead>
                    <tr>
                        <th scope="col">Tháng bán được nhiều nhất</th>
                    </tr>
                </thead>


                <tbody>
                    {StoreStatisticByYear && StoreStatisticByYear.slice(StoreStatisticByYear.length - 2, StoreStatisticByYear.length - 1).map((e, index) => (
                        <tr key={index}>
                            {e.month_sold_max && e.month_sold_max.map((month_sold_max, index) => (
                                <li>{e.month_sold_max}</li>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
}