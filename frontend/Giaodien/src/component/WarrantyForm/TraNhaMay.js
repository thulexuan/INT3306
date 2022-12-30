import React, { Component } from 'react';

// Call API them san pham cua nha may
class TraNhaMay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product_code: "",
            factory_code: "",
            warranty_center_code: ""
        };
    }

    setParams = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    callApiTraNhaMay = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("product_code", this.state.product_code);
        urlencoded.append("factory_code", this.state.factory_code);
        urlencoded.append("warranty_center_code", this.state.warranty_center_code);


        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow",
        };

        fetch(
            "http://localhost/ProductionMove/ProductionMove/public/api/warranty/tra_cho_nha_may",
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
                    <h4 className="modal-title w-100 font-weight-bold">CHUYỂN NHỮNG SẢN PHẨM KHÔNG THỂ SỬA VỀ NHÀ MÁY</h4>
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
                            type="text"
                            id="defaultForm-email"
                            name="product_code"
                            className="form-control validate"
                            onChange={this.setParams}
                        />
                    </div>



                    <i className=" prefix grey-text" />
                    <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="defaultForm-pass"
                    >
                        Factory code
                    </label>

                    <input
                        name='factory_code'
                        type="text"
                        id="defaultForm-pass"
                        className="form-control validate"
                        onChange={this.setParams}
                    />
                    <i className="prefix grey-text" />
                    <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="defaultForm-email"
                    >
                        Warranty Center Code
                    </label>
                    <input
                        name='warranty_center_code'
                        type="text"
                        id="defaultForm-email"
                        className="form-control validate"
                        onChange={this.setParams}
                    />

                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button className="btn btn-default" onClick={this.callApiTraNhaMay}>ADD</button>
                </div>
            </form>
        );
    }
}

export default TraNhaMay;