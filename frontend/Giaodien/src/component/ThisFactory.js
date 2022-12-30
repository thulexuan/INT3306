import React, { Component } from 'react';
import Records from '../json/thisstore.json';
import banner from "../images/banner5.jpg";
import AddProductForm from './FactoryForm/AddProductForm';
import MoveToStoreForm from './FactoryForm/MoveToStoreForm';
import FailedProductBack from './FactoryForm/FailedProductBack';
import { Outlet, Link } from "react-router-dom";


const ThisFactory = () => {
    return (
        <>
            {/*end*/}
            <section
                className="image-head-wrapper"
                style={{ backgroundImage: "url(" + banner + ")" }}
            >
                <div className="inner-wrapper">
                    <h1 >WELCOME TO FACTORY CENTER</h1>
                </div>
            </section>
            <div className="clearfix" />
            {/*dinning*/}
            <section className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-8 col-xs-12">
                            <h2 className="blog-title-head">FACTORY MANAGEMENT CENTER</h2>
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

                                        <AddProductForm />

                                    </div>

                                </div>
                            </div>

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
                                        <MoveToStoreForm />
                                    </div>

                                </div>
                            </div>
                            <div
                                className="modal fade"
                                id="modalProductBackForm"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="myModalLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog" role="document" >
                                    <div className="modal-content single-bottom comment-form">
                                        <FailedProductBack />
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
                                        <Link to="/thisfactory/view_products"><i className="fa fa-caret-right"></i>Xem tất cả sản phẩm của nhà máy</Link>

                                    </li>

                                    <li>
                                        <div>
                                            <a href="" data-toggle="modal" data-target="#modalAddProductForm">
                                                <i className="fa fa-caret-right"></i>Nhập các lô sản phẩm mới</a>
                                        </div>

                                    </li>
                                    <li>
                                        <div>
                                            <a href="" data-toggle="modal" data-target="#modalMoveToStoreForm">
                                                <i className="fa fa-caret-right"></i>Xuất sản phẩm cho đại lý</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <a href="" data-toggle="modal" data-target="#modalProductBackForm">
                                                <i className="fa fa-caret-right"> </i>Nhận các sản phẩm lỗi về từ các trung tâm bảo hành
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <Link to="/thisfactory/view_failed_products"><i className="fa fa-caret-right"></i>Xem các sản phẩm lỗi</Link>

                                    </li>


                                    <li>
                                        <Link to="/thisfactory/statistic_sold_product"><i className="fa fa-caret-right"></i>Thống kê sản phẩm đã bán</Link>

                                    </li>
                                    <li>
                                        <Link to="/thisfactory/statistic_failed_by_productline"><i className="fa fa-caret-right"></i>Thống kê sản phẩm lỗi theo dòng sản phẩm</Link>

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

export default ThisFactory;