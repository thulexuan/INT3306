import React, { Component } from 'react';

// Call API them san pham cua nha may
class AddProductLineForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productline_code: "",
            productline_name: "",
            make: "",
            year: "",
            engine_type: "",
            transmission: "",
            drive_type: "",
            cylinder: "",
            total_seats: "",
            total_doors: "",
            basic_warranty_years: ""
        };
    }

    setParams = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    callApiAddProductLine = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("productline_code", this.state.productline_code);
        urlencoded.append("productline_name", this.state.productline_name);
        urlencoded.append("make", this.state.make);
        urlencoded.append("year", this.state.year);
        urlencoded.append("engine_type", this.state.engine_type);
        urlencoded.append("transmission", this.state.transmission);
        urlencoded.append("drive_type", this.state.drive_type);
        urlencoded.append("cylinder", this.state.cylinder);
        urlencoded.append("total_seats", this.state.total_seats);
        urlencoded.append("total_doors", this.state.total_doors);
        urlencoded.append("basic_warranty_years", this.state.basic_warranty_years);


        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow",
        };

        fetch(
            "http://localhost/ProductionMove/ProductionMove/public/api/admin/add_product_line",
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
                    <h4 className="modal-title w-100 font-weight-bold">THÊM DÒNG SẢN PHẨM MỚI</h4>
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
                            Productline Code
                        </label>
                        <input
                            name='productline_code'
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
                            Productline name
                        </label>

                        <input
                            name='productline_name'
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
                            Make
                        </label>

                        <input
                            name='make'
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
                            Year
                        </label>
                        <input
                            name='year'
                            type="text"
                            id="defaultForm-pass"
                            className="form-control validate"
                            onChange={this.setParams}
                        />

                    </div>
                    <i className="prefix grey-text" />
                    <label
                        data-error="wrong"
                        data-success="right"
                        htmlFor="defaultForm-pass"
                    >
                        Engine Type
                    </label>
                    <input
                        name='engine_type'
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
                        Transmission
                    </label>
                    <input
                        name='transmission'
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
                        Drive Type
                    </label>
                    <input
                        name='drive_type'
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
                        Cylinder
                    </label>
                    <input
                        name='cylinder'
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
                        Total Seats
                    </label>
                    <input
                        name='total_seats'
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
                        Total Doors
                    </label>
                    <input
                        name='total_doors'
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
                        Basic wanrranty years
                    </label>
                    <input
                        name='basic_warranty_years'
                        type="text"
                        id="defaultForm-pass"
                        className="form-control validate"
                        onChange={this.setParams}
                    />


                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button className="btn btn-default" onClick={this.callApiAddProductLine}>ADD</button>
                </div>
            </form>
        );
    }
}

export default AddProductLineForm;