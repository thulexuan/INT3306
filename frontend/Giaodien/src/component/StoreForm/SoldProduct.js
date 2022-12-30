import React, { Component } from 'react';

// Call API them san pham cua nha may
class SoldProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_code: "",
            customer_code: "",
            customer_name: "",
            address: "",
            phone_number: "",
            order_number: "",
            store_code: ""
        };
    }

    setParams = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    callApiSoldProduct = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("product_code", this.state.product_code);
        urlencoded.append("customer_code", this.state.customer_code);
        urlencoded.append("customer_name", this.state.customer_name);
        urlencoded.append("address", this.state.address);
        urlencoded.append("phone_number", this.state.phone_number);
        urlencoded.append("order_number", this.state.order_number);
        urlencoded.append("store_code", this.state.store_code);


        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow",
        };

        fetch(
            "http://localhost/ProductionMove/ProductionMove/public/api/store/sold_product",
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
                    <h4 className="modal-title w-100 font-weight-bold">NHẬP SẢN PHẨM ĐÃ BÁN</h4>
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
                            Product code was saled
                        </label>
                        <input
                            name='product_code'
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
                            Customer code
                        </label>
                        <input
                            name='customer_code'
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
                            Customer name
                        </label>
                        <input
                            name='customer_name'
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
                            Address
                        </label>
                        <input
                            name='address'
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
                            Phone Number
                        </label>
                        <input
                            type="text"
                            name='phone_number'
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
                            Order Number
                        </label>
                        <input
                            type="text"
                            name='order_number'
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
                            Store code
                        </label>
                        <input
                            name='store_code'
                            type="text"
                            id="defaultForm-pass"
                            className="form-control validate"
                            onChange={this.setParams}
                        />


                    </div>

                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button className="btn btn-default" onClick={this.callApiSoldProduct}>ADD</button>
                </div>
            </form>
        );
    }
}

export default SoldProduct;