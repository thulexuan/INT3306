import React, { useState } from "react";
import { useEffect } from "react";
//import "../css/table.css";
//import "../css/style.css";
//import Popup from "reactjs-popup";
//import Aproducts from "./Aproducts";
import axios from "axios";


export default function FactoryStatisticByYear() {
    const [year, setYear] = useState([])
    const [FactoryStatisticByYear, setFactoryStatisticByYear] = useState([]);
    var idb = localStorage.getItem("place_code");
    useEffect(() => {
        refreshFactoryStatisticByYear();
    }, [year]);

    function refreshFactoryStatisticByYear() {
        const ProjectAPI = axios
            .get(
                `http://localhost/ProductionMove/ProductionMove/public/api/factory/statistic/${idb}/${year}`
            )
            .then((res) => setFactoryStatisticByYear(res.data))
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
            </select >
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
                    {FactoryStatisticByYear && FactoryStatisticByYear.slice(0, FactoryStatisticByYear.length - 2).map((e, index) => (
                        <tr key={index}>
                            <td>{e.month}</td>
                            <td>{e.num_of_products}</td>
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
                    {FactoryStatisticByYear && FactoryStatisticByYear.slice(FactoryStatisticByYear.length - 2, FactoryStatisticByYear.length - 1).map((e, index) => (
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
                    {FactoryStatisticByYear && FactoryStatisticByYear.slice(FactoryStatisticByYear.length - 1, FactoryStatisticByYear.length).map((e, index) => (
                        <tr key={index}>
                            {e.month_sold_max.map((month_sold_max, i) => (
                                <li key={e.month_sold_max}>{month_sold_max}</li>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );




}