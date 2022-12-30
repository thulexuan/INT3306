import React, { Component } from 'react';
import Records from '../json/thisstore.json';
import banner from "../images/banner5.jpg";
import AddProductWarrantyForm from './WarrantyForm/AddProductWarrantyForm';
import TraDaiLy from './WarrantyForm/TraDaiLy';
import TraNhaMay from './WarrantyForm/TraNhaMay';
import { Outlet, Link } from "react-router-dom";

const ThisWarranty = () => {
    return (
        <>
            {/*end*/}
            <section
                className="image-head-wrapper"
                style={{ backgroundImage: "url(" + banner + ")" }}
            >
                <div className="inner-wrapper">
                    <h1>WELCOME TO WARRANTY CENTER</h1>
                </div>
            </section>
            <div className="clearfix" />
            {/*dinning*/}
            <section className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-8 col-xs-12">
                            <h2 className="blog-title-head">WARRANTY MANAGEMENT CENTER</h2>
                            <Outlet />

                            <div className="clearfix" />

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
                                        <AddProductWarrantyForm />
                                    </div>

                                </div>
                            </div>

                            {/**------------------------------- */}
                            <div
                                className="modal fade"
                                id="modalMoveToStoreForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <TraDaiLy />
                                    </div>

                                </div>
                            </div>

                            {/**---------- */}
                            <div
                                className="modal fade"
                                id="modalMoveToFactoryForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <TraNhaMay />
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
                                        <Link to="/thiswarranty/view_products"><i className="fa fa-caret-right"></i>Xem tất cả sản phẩm</Link>

                                    </li>
                                    <li>
                                        <div>
                                            <a href="" data-toggle="modal" data-target="#modalAddProductForm">
                                                <i className="fa fa-caret-right"></i>Nhận sản phẩm cần bảo hành hoặc triệu hồi từ đại lý</a>
                                        </div>

                                    </li>
                                    <li>
                                        <div>
                                            <a href="" data-toggle="modal" data-target="#modalMoveToStoreForm">
                                                <i className="fa fa-caret-right"></i>Trả cho đại lý</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="" data-toggle="modal" data-target="#modalMoveToFactoryForm">
                                                <i className="fa fa-caret-right"></i>Trả cho nhà máy</a>
                                        </div>

                                    </li>

                                    <li>
                                        <Link to="/thiswarranty/statistic_done"><i className="fa fa-caret-right"></i>Thống kê sản phẩm đã bảo hành xong</Link>

                                    </li>
                                    <li>
                                        <Link to="/thiswarranty/statistic_failed"><i className="fa fa-caret-right"></i>Thống kê sản phẩm lỗi</Link>

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

export default ThisWarranty;