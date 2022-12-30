import React, { useState } from 'react';
import { useEffect } from 'react';
import "../../css/table.css"

import axios from 'axios';

export default function ViewProductByStatus(props) {
    const [PersonList, setPersonList] = useState([])

    useEffect(() => {
        refreshPersonList();
    }, [])

    function refreshPersonList() {
        const ProjectAPI = axios.get('http://localhost/ProductionMove/ProductionMove/public/api/admin/view_products_by_status')
            .then(res => setPersonList(res.data))
            .catch(err => console.log(err))
    }


    return (

        <div col-md-9 col-sm-8 col-xs-12>
            <h3>VIEW PRODUCT BY STATUS</h3>
            <table id='product-table' >
                <thead >
                    <tr>
                        <th scope='col'>Status</th>
                        <th scope='col'>The number of Product</th>




                    </tr>
                </thead>

                <tbody >
                    {
                        PersonList.map((e, i) =>
                            <tr key={i}>
                                <td>{e.status}</td>
                                <td>{e.num_of_products}</td>


                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}