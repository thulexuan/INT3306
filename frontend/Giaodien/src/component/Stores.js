import React, { useState } from 'react';
import { useEffect } from 'react';
import "../css/table.css"

import axios from 'axios';

export default function PersonList(props) {
  const [PersonList, setPersonList] = useState([])

  useEffect(() => {
    refreshPersonList();
  }, [])

  function refreshPersonList() {
    const ProjectAPI = axios.get('http://localhost/ProductionMove/ProductionMove/public/api/admin/view_stores')
      .then(res => setPersonList(res.data))
      .catch(err => console.log(err))
  }


  return (

    <div col-md-9 col-sm-8 col-xs-12>
      <h3>STORE LIST</h3>
      <table id='product-table' >
        <thead >
          <tr>
            <th scope='col'>Store code</th>
            <th scope='col'>Store name</th>
            <th scope='col'>Address</th>

          </tr>
        </thead>

        <tbody >
          {
            PersonList.map((e, i) =>
              <tr key={i}>
                <td>{e.store_code}</td>
                <td>{e.store_name}</td>
                <td>{e.address}</td>

              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}