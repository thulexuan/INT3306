import React, { Component } from 'react';
import Records from '../json/thisstore.json';
import banner from "../images/banner5.jpg";
import AddProductStoreForm from './StoreForm/AddProductStoreForm';
import SoldProduct from './StoreForm/SoldProduct';
import DuaVeTTBHForm from './StoreForm/DuaVeTTBHForm';
import NhanTuTTBHForm from './StoreForm/NhanTuTTBHForm';
import NhanTuKhForm from './StoreForm/NhanTuKhForm';
import TraVeKh from './StoreForm/TraVeKh';
import { Outlet, Link } from "react-router-dom";

const ThisStore = () => {
    return (
        <>
            {/*end*/}
            <section
                className="image-head-wrapper"
                style={{ backgroundImage: "url(" + banner + ")" }}
            >
                <div className="inner-wrapper">
                    <h1>WELCOME TO STORE CENTER</h1>
                </div>
            </section>
            <div className="clearfix" />
            {/*dinning*/}
            <section className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-8 col-xs-12">
                            <h2 className="blog-title-head">STORE MANAGEMENT</h2>
                            <Outlet />

                            <div className="clearfix" />
                            {/*your form nhap *
                        <div className="single-bottom comment-form">
                            <h3>Leave your Comment</h3>
                            <form action="#" method="post">
                            <input
                                type="text"
                                className="form-control"
                                name="Name"
                                placeholder="Name"
                                required=""
                            />
                            <input
                                type="email"
                                className="form-control"
                                name="Email"
                                placeholder="Email"
                                required=""
                            />
                            <textarea
                                className="form-control"
                                name="Message"
                                placeholder="Message Here...."
                                required=""
                                defaultValue={""}
                            />
                            <input type="submit" className="submit-btn" defaultValue="Send" />
                            </form>
                        </div>
                        */}
                            <div
                                className="modal fade"
                                id="modalAddProductForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <AddProductStoreForm />
                                    </div>

                                </div>
                            </div>
                            {/*------------nhan tu kh---------------- */}
                            <div
                                className="modal fade"
                                id="modalNhanTuKhForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <NhanTuKhForm />
                                    </div>

                                </div>
                            </div>

                            {/*---------------------------- */}

                            {/*------------tra lai kh---------------- */}
                            <div
                                className="modal fade"
                                id="modalTraVeKhForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <TraVeKh />
                                    </div>

                                </div>
                            </div>

                            {/*---------------------------- */}

                            <div
                                className="modal fade"
                                id="modalDuaVeTTBHForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <DuaVeTTBHForm />
                                    </div>

                                </div>
                            </div>


                            <div
                                className="modal fade"
                                id="modalNhanTuTTBHForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <NhanTuTTBHForm />
                                    </div>

                                </div>
                            </div>
                            {/**----------------------ban san pham */}

                            <div
                                className="modal fade"
                                id="modalSaleForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <SoldProduct />
                                    </div>

                                </div>
                            </div>


                        </div>

                        {/**---------------------thong ke theo nam */}
                        <div
                            className="modal fade"
                            id="modalYearForm"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="myModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog" role="document" >
                                <div className="modal-content single-bottom comment-form">
                                    <div className="modal-header text-center">
                                        <h4 className="modal-title w-100 font-weight-bold">THỐNG KÊ SẢN PHẨM THEO NĂM</h4>
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
                                                htmlFor="defaultForm-pass"
                                            >
                                                Year
                                            </label>
                                            <input
                                                type="text"
                                                id="defaultForm-pass"
                                                className="form-control validate"
                                            />

                                        </div>

                                    </div>
                                    <div className="modal-footer d-flex justify-content-center">
                                        <button className="btn btn-default">ADD</button>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <aside className="col-md-3 col-sm-4 col-xs-12">
                            <div className="blog-list">
                                <h4>PRODUCT MANAGEMENT

                                </h4>
                                <ul>

                                    <li>
                                        <Link to="/thisstore/view_products"><i className="fa fa-caret-right"></i>Xem tất cả sản phẩm</Link>

                                    </li>
                                    <li>

                                        <div>
                                            <a href="" data-toggle="modal" data-target="#modalAddProductForm">
                                                <i className="fa fa-caret-right"></i>Nhập sản phẩm vào kho</a>
                                        </div>

                                    </li>
                                    <li>
                                        <div>
                                            <a href="" data-toggle="modal" data-target="#modalSaleForm">
                                                <i className="fa fa-caret-right"></i>Bán sản phẩm</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="" data-toggle="modal" data-target="#modalNhanTuKhForm">
                                                <i className="fa fa-caret-right"></i>Nhận từ khách hàng </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="" data-toggle="modal" data-target="#modalDuaVeTTBHForm">
                                                <i className="fa fa-caret-right"></i>Đưa về trung tâm bảo hành </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="" data-toggle="modal" data-target="#modalNhanTuTTBHForm">
                                                <i className="fa fa-caret-right"></i>Nhận từ trung tâm bảo hành </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="" data-toggle="modal" data-target="#modalTraVeKhForm">
                                                <i className="fa fa-caret-right"></i>Trả về khách hàng </a>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/thisstore/statistic_sold_product"><i className="fa fa-caret-right"></i>Thống kê sản phẩm đã bán</Link>

                                    </li>


                                </ul>
                                <div className="clearfix"> </div>
                            </div>

                        </aside>
                    </div>
                </div>
            </section>
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

export default ThisStore;