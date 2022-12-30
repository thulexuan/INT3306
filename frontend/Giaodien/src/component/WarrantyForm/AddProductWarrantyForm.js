import React, { Component } from 'react';

// Call API them san pham cua nha may
class AddProductWarrantyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_code: ""

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



        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow",
        };

        fetch(
            "http://localhost/ProductionMove/ProductionMove/public/api/warranty/nhan_san_pham",
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
                    <h4 className="modal-title w-100 font-weight-bold">NHẬP SẢN PHẨM CẦN BẢO HÀNH</h4>
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
                    </div>

                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button className="btn btn-default" onClick={this.callApiAddProduct}>ADD</button>
                </div>
            </form>
        );
    }
}

export default AddProductWarrantyForm;