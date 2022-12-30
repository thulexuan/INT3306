import React, { useState } from 'react';
import { useEffect } from 'react';
import "../css/table.css"

import axios from 'axios';

export default function ProductLine(props) {
    const [PersonList, setPersonList] = useState([])

    useEffect(() => {
        refreshPersonList();
    }, [])

    function refreshPersonList() {
        const ProjectAPI = axios.get('http://localhost/ProductionMove/ProductionMove/public/api/admin/view_product_lines')
            .then(res => setPersonList(res.data))
            .catch(err => console.log(err))
    }


    return (

        <div col-md-9 col-sm-8 col-xs-12>
            <h3>PRODUCT LINES LIST</h3>
            <table id='product-table'>
                <thead >
                    <tr>
                        <th scope='col'>Product code</th>
                        <th scope='col'>Productline name</th>
                        <th scope='col'>Make</th>
                        <th scope='col'>Year</th>
                        <th scope='col'>Engine type</th>
                        <th scope='col'>Tranmission</th>
                        <th scope='col'>Drive type</th>
                        <th scope='col'>Cylinder</th>
                        <th scope='col'>Total seats</th>
                        <th scope='col'>Total doors</th>
                        <th scope='col'>Basic warranty year</th>



                    </tr>
                </thead>

                <tbody >
                    {
                        PersonList.map((e, i) =>
                            <tr key={i}>
                                <td>{e.productline_code}</td>
                                <td>{e.productline_name}</td>
                                <td>{e.make}</td>
                                <td>{e.year}</td>
                                <td>{e.engine_type}</td>
                                <td>{e.transmission}</td>
                                <td>{e.drive_type}</td>
                                <td>{e.cylinder}</td>
                                <td>{e.total_seats}</td>
                                <td>{e.total_doors}</td>
                                <td>{e.basic_warranty_years}</td>


                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div >
    )
}