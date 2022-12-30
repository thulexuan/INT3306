import React, { Component } from 'react';

// Call API them san pham cua nha may
class AddProductForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_code: "",
            product_name: "",
            product_line: "",
            brand: "",
            place_code: ""
        };
    }

    setParams = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    callApiAddProduct = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("product_code", this.state.product_code);
        urlencoded.append("product_name", this.state.product_name);
        urlencoded.append("product_line", this.state.product_line);
        urlencoded.append("brand", this.state.brand);
        urlencoded.append("place_code", this.state.place_code);

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow",
        };

        fetch(
            "http://localhost/ProductionMove/ProductionMove/public/api/factory/add_product",
            requestOptions
        )
            .then((response) => {
                console.log(response);
                if (response.ok) {
                    return response.json();
                }
                throw Error(response.status);
            });
    };


    render() {
        return (
            <form>
                <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">NHẬP SẢN PHẨM MỚI</h4>

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
                            Product code
                        </label>
                        <input
                            name='product_code'
                            type="text"
                            id="defaultForm-email"
                            className="form-control validate"
                            onChange={this.setParams}
                        />



                        <i className=" prefix grey-text" />
                        <label
                            data-error="wrong"
                            data-success="right"
                            htmlFor="defaultForm-pass"
                        >
                            Product name
                        </label>

                        <input
                            name="product_name"
                            type="text"
                            id="defaultForm-pass"
                            className="form-control validate"
                            onChange={this.setParams}
                        />

                        <i className=" prefix grey-text" />
                        <label
                            data-error="wrong"
                            data-success="right"
                            htmlFor="defaultForm-pass"
                        >
                            Product line
                        </label>

                        <input
                            name="product_line"
                            type="text"
                            id="defaultForm-pass"
                            className="form-control validate"
                            onChange={this.setParams}
                        />


                        <i className="prefix grey-text" />
                        <label
                            data-error="wrong"
                            data-success="right"
                            htmlFor="defaultForm-pass"
                        >
                            Brand
                        </label>

                        <input
                            name="brand"
                            type="text"
                            id="defaultForm-pass"
                            className="form-control validate"
                            onChange={this.setParams}
                        />

                        <i className="prefix grey-text" />
                        <label
                            data-error="wrong"
                            data-success="right"
                            htmlFor="defaultForm-pass"
                        >
                            Place code
                        </label>
                        <input
                            name='place_code'
                            type="text"
                            id="defaultForm-pass"
                            className="form-control validate"
                            onChange={this.setParams}
                        />

                    </div>

                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button className="btn btn-default" onClick={this.callApiAddProduct}>ADD</button>
                </div>
            </form>
        );
    }
}

export default AddProductForm;