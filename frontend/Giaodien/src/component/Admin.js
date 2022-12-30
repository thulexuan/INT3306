import React, { Component } from 'react';
import Records from '../json/thisstore.json';
import banner from "../images/banner7.jpg";
import '../font-awesome/css/font-awesome.min.css'
import Popup from 'reactjs-popup';
import banner2 from "../images/banner2.png"
import CreateAccount from './AdminForm/CreateAccount';
import DeleteAccount from './AdminForm/DeleteAccount';
import UpdateAccount from './AdminForm/UpdateAccount';
import AddProductLineForm from './AdminForm/AddProductLineForm';
import { Outlet, Link } from "react-router-dom";

const Admin = () => {
    return (
        <>
            {/*end*/}
            <section
                className="image-head-wrapper"
                style={{ backgroundImage: "url(" + banner + ")" }}
            >
                <div className="inner-wrapper">
                    <h1>WELCOME TO BIG CORP CENTER</h1>
                </div>
            </section>
            <div className="clearfix" />
            {/*dinning*/}
            <section className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-8 col-xs-12">
                            <h2 className="blog-title-head">BIG CORP MANAGEMENT CENTER</h2>

                            <div className="clearfix" />


                            {/*------------------------------------------- */}
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
                                        <CreateAccount />
                                    </div>

                                </div>
                            </div>
                            <div
                                className="modal fade"
                                id="modalUpdateUserForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <UpdateAccount />
                                    </div>

                                </div>
                            </div>
                            <div
                                className="modal fade"
                                id="modalDeleteUserForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <DeleteAccount />
                                    </div>

                                </div>
                            </div>
                            <div
                                className="modal fade"
                                id="modalAddProductLineForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <AddProductLineForm />
                                    </div>

                                </div>
                            </div>
                            <section className="blog">
                                <div className="container">
                                    <div className="row">

                                        <div className="col-md-9 col-sm-8 col-xs-12">
                                            <Outlet />
                                            {/*
                                            <h2 className="blog-title-head">ADMIN CENTER OF BIG CORD</h2>

                                            <div className="blog-image-single margin-top-small">
                                                <img src={banner2} className="img-responsive" />
                                            </div>
                                            <p className="blog-desc">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
    </p> */}


                                        </div>
                                        <aside className="col-md-3 col-sm-4 col-xs-12">
                                            <div className="blog-list">
                                                <h4>PRODUCT LINE MANAGEMENT

                                                </h4>
                                                <ul>
                                                    <li>
                                                        <div>
                                                            <a href="" data-toggle="modal" data-target="#modalAddProductLineForm">
                                                                <i className="fa fa-caret-right"></i>Thêm dòng dản phẩm mới</a>
                                                        </div>

                                                    </li>
                                                    <li>
                                                        <Link to="/admin/all_products"><i className="fa fa-caret-right"></i>Xem tất cả sản phẩm</Link>

                                                    </li>
                                                    <li>

                                                        <Link to="/admin/all_product_lines"><i className="fa fa-caret-right"></i>Xem tất cả dòng sản phẩm</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/admin/factories"><i className="fa fa-caret-right"></i>Xem danh sách nhà máy</Link>

                                                    </li>
                                                    <li>
                                                        <Link to="/admin/stores"><i className="fa fa-caret-right"></i>Xem danh sách đại lý</Link>
                                                    </li>

                                                    <li>
                                                        <Link to="/admin/warranty_centers"><i className="fa fa-caret-right"></i>Xem danh sách trung tâm bảo hành</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/admin/statisticbyfactory"><i className="fa fa-caret-right"></i>Thống kê sản phẩm trên toàn quốc theo nhà máy</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/admin/statisticbystore"><i className="fa fa-caret-right"></i>Thống kê sản phẩm trên toàn quốc theo đại lý phân phối</Link>

                                                    </li>
                                                    <li>
                                                        <Link to="/admin/statisticbywarranty"><i className="fa fa-caret-right"></i>Thống kê sản phẩm trên toàn quốc theo trung tâm bảo hành</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/admin/statisticbystatus"><i className="fa fa-caret-right"></i>Thống kê sản phẩm trên toàn quốc theo trạng thái</Link>
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
                                                        <div>
                                                            <a href="" data-toggle="modal" data-target="#modalUpdateUserForm">
                                                                <i className="fa fa-caret-right"></i>Cập nhật thông tin tài khoản</a>
                                                        </div>

                                                    </li>
                                                    <li>
                                                        <div>
                                                            <a href="" data-toggle="modal" data-target="#modalDeleteUserForm">
                                                                <i className="fa fa-caret-right"></i>Xóa tài khoản</a>
                                                        </div>

                                                    </li>



                                                </ul>
                                                <div className="clearfix"> </div>
                                            </div>

                                        </aside>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div >
                </div >
            </section >

        </>

    )

    /*  
        
        return (
            
        
           Records.map( record => 
            {
                return(
                    <div>
                        <p>{record.address}</p>
                    </div>
                )
            })
    
         
        )
      
    };*/
}

export default Admin;