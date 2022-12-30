import React, { useState } from 'react';
import { useEffect } from 'react';
import "../../css/table.css"

import axios from 'axios';

export default function ProductListByFactory(props) {
    const [ProductList, setProductList] = useState([])

    useEffect(() => {
        refreshProductList();
    }, [])

    function refreshProductList() {
        const ProjectAPI = axios.get('http://localhost/ProductionMove/ProductionMove/public/api/admin/view_products_by_factory')
            .then(res => setProductList(res.data))
            .catch(err => console.log(err))
    }


    return (

        <div col-md-9 col-sm-8 col-xs-12>
            <h3>VIEW PRODUCT BY FACTORY</h3>
            <table id='product-table' >
                <thead >
                    <tr>
                        <th scope='col'>Factory code</th>
                        <th scope='col'>Factory name</th>
                        <th scope='col'>The Number Of Products</th>




                    </tr>
                </thead>

                <tbody >
                    {
                        ProductList.map((e, i) =>
                            <tr key={i}>
                                <td>{e.factory_code}</td>
                                <td>{e.factory_name}</td>
                                <td>{e.num_of_products}</td>


                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}