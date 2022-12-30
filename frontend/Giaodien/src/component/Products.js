import React, { useState } from 'react';
import { useEffect } from 'react';
import "../css/table.css"
import "../css/style.css"
import Popup from 'reactjs-popup';
import Aproducts from './Aproducts'
import axios from 'axios';
import { set } from 'react-hook-form';

export default function AllProducts() {




  const [PersonList, setPersonList] = useState([])

  useEffect(() => {
    refreshPersonList();
  }, [])

  function refreshPersonList() {
    const ProjectAPI = axios.get('http://localhost/ProductionMove/ProductionMove/public/api/admin/view_all_products')
      .then(res => setPersonList(res.data))
      .catch(err => console.log(err))
  }
  const [post, setPost] = useState([]);

  const [idb, setIdb] = useState(1)

  useEffect(() => {
    axios.get(`http://localhost/ProductionMove/ProductionMove/public/api/admin/view_product/${idb}`)
      .then(response => {
        setPost(response.data)
      })
      .catch(error => console.log(error))
  }, [idb]);



  return (

    <div col-md-9 col-sm-8 col-xs-12>

      <h3>PRODUCT LIST</h3>
      <table id='product-table'>
        <thead >
          <tr>
            <th scope='col'>product_code</th>
            <th scope='col'>product_line</th>
            <th scope='col'>brand</th>
            <th scope='col'>product_name</th>
            <th scope='col'>status</th>
            <th scope='col'>place at</th>
            <th scope='col'>place name</th>
            <th scope='col'>Infomation</th>
          </tr>
        </thead>

        <tbody >
          {

            PersonList.map((e, i) =>
              <tr key={i}>
                <td>{e.product_code}</td>
                <td>{e.product_line}</td>
                <td>{e.brand}</td>
                <td>{e.product_name}</td>
                <td>{e.status}</td>
                <td>{e.place_at}</td>
                <td>{e.place_name}</td>


                <td>
                  <Popup trigger={<button className='btn'>Click me</button>} className='modalll' position="left center">
                    <Aproducts value={e.product_code} />
                  </Popup>
                </td>

              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}