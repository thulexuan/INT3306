
import React, {Component} from 'react';
import Records from '../json/thisstore.json';
import banner from "../images/banner7.jpg";
import '../font-awesome/css/font-awesome.min.css'
import Popup from 'reactjs-popup';
import Products from './Products'
import {Routes, Route} from 'react-router-dom'

 
const AdminDo =() => {
    return (
        <>
         <div>     
        <div 
        className="modal fade"
        id="modalAddUserForm"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
        >
        <div className="modal-dialog" role="document" >
            <div className="modal-content single-bottom comment-form">
            <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">THÊM TÀI KHOẢN MỚI</h4>
                <button 
                type="button"
                className="submit-btn"
                data-dismiss="modal"
                aria-label="Close"
                > 
                <span aria-hidden="true">Exit</span>
                </button>
            </div>
            <div className="modal-body mx-3">
                <div className="">
                <i className="prefix grey-text" />
                <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="defaultForm-email"
                >
                    Place Code
                </label>
                <input
                    name='place_code'
                    type="text"
                    id="defaultForm-email"
                    className="form-control validate"
                />
             
               
                
                <i className=" prefix grey-text" />
                <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="defaultForm-pass"
                >
                    User name
                </label>

                <input
                    name='username'
                    type="text"
                    id="defaultForm-pass"
                    className="form-control validate"
                />

                
                <i className="prefix grey-text" />
                <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="defaultForm-pass"
                >
                    PassWord
                </label>
                
                <input
                    name='password'
                    type="text"
                    id="defaultForm-pass"
                    className="form-control validate"
                />
                
                <i className="prefix grey-text" />
                <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="defaultForm-pass"
                >
                    Role
                </label>
                <input
                name='user_role'
                    type="text"
                    id="defaultForm-pass"
                    className="form-control validate"
                />
             
                </div>
                <i className="prefix grey-text" />
                <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="defaultForm-pass"
                >
                    Place Name
                </label>
                <input
                name='place_name'
                    type="text"
                    id="defaultForm-pass"
                    className="form-control validate"
                />
                <i className="prefix grey-text" />
                <label
                    data-error="wrong"
                    data-success="right"
                    htmlFor="defaultForm-pass"
                >
                    Address
                </label>
                <input
                name='address'
                    type="text"
                    id="defaultForm-pass"
                    className="form-control validate"
                />
             
                
            </div>
            <div className="modal-footer d-flex justify-content-center">
                <button className="btn btn-default">ADD</button>
            </div>
        </div>
            
        </div>
    </div>
        

    
    </div>
    <aside className="col-md-3 col-sm-4 col-xs-12">
    <div className="blog-list">
        <h4>PRODUCT LINE MANAGEMENT

        </h4>
        <ul>
        <li>
            
            <a href='/products'>
            <i className="fa fa-caret-right"> </i>Xem danh sách dòng sản phẩm
            </a>
        </li>
        <li>
            
            <a>
            <i className="fa fa-caret-right"> </i>Xem danh sách nhà máy
            </a>
        </li>
        <li>
            
            <a>
            <i className="fa fa-caret-right"> </i>Xem danh sách đại lý
            </a>
        </li>
       
        <li>
            
            <a>
            <i className="fa fa-caret-right"> </i>Xem danh sách trung tâm bảo hành
            </a>
        </li>
        <li>
            <a>
            <i className="fa fa-caret-right"> </i>Thống kê sản phẩm trên toàn quốc theo cơ sở phân phối
            </a>
        </li>
        <li>
            <a>
            <i className="fa fa-caret-right"> </i>Thống kê sản phẩm trên toàn quốc theo cửa hàng
            </a>
        </li>
        <li>
            <a>
            <i className="fa fa-caret-right"> </i>Thống kê sản phẩm trên toàn quốc theo trung tâm bảo hành
            </a>
        </li>
        
       
        </ul>
        <div className="clearfix"> </div>
    </div>
    <div className="blog-list">
        <h4>USER MANAGEMENT

        </h4>
        <ul>
        <li>
        <div>
            <a href="" data-toggle="modal" data-target="#modalAddUserForm">
            <i className="fa fa-caret-right"></i>Thêm tài khoản mới</a>
            </div>
            
        </li>
       
        <li>
            <a>
            <i className="fa fa-caret-right"> </i>Xoá tài khoản
            </a>
        </li>
        <li>
            <a>
            <i className="fa fa-caret-right"> </i>Thay đổi thông tin tài khoản
            </a>
        </li>
       
        
       
        </ul>
        <div className="clearfix"> </div>
    </div>
   
    </aside>
        </>
      
  
    )
}
    export default AdminDo
