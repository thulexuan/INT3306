import React, { useState } from 'react';
import { useEffect } from 'react';
import "../css/table.css"
import "../css/style.css"
import Aproducts from './Aproducts'
import axios from 'axios';


export default function Test(props) {




    const [testTest, setTestTest] = useState([])

    useEffect(() => {
        axios.get('http://localhost/ProductionMove/ProductionMove/public/api/admin/view_all_products')
            .then(res => { setTestTest(res.data); console.log(res.data); })
            .catch(err => console.log(err))

    }, [])



    return (

        <div col-md-9 col-sm-8 col-xs-12>

            <h3>PRODUCT LIST</h3>
            <table id='product-table' >
                <thead >
                    <tr>

                        <th scope='col'>product_code</th>
                        <th scope='col'>product_line</th>
                        <th scope='col'>brand</th>
                        <th scope='col'>product_name</th>
                        <th scope='col'>status</th>
                        <th scope='col'>factory_code</th>
                        <th scope='col'>store_code</th>
                        <th scope='col'>warranty_center_code</th>
                        <th scope='col'>manufacturing_code</th>
                        <th scope='col'>Infomation</th>
                    </tr>
                </thead>

                <tbody >
                    {

                        testTest.map((e, i) =>
                            <tr key={i}>
                                <td>{e.product_code}</td>
                                <td>{e.product_line}</td>
                                <td>{e.brand}</td>
                                <td>{e.product_name}</td>
                                <td>{e.status}</td>
                                <td>{e.factory_code}</td>
                                <td>{e.store_code}</td>
                                <td>{e.warranty_center_code}</td>
                                <td>{e.manufacturing_code}</td>
                                <td>

                                    <Aproducts value={e.product_code} />

                                </td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}