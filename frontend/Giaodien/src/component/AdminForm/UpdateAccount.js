import React, { Component } from 'react';

// Call API them san pham cua nha may
class UpdateAccount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            place_code: "",
            username: "",
            password: "",
            place_name: "",
            address: ""
        };
    }

    setParams = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    callApiUpdateAccount = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("place_code", this.state.place_code);
        urlencoded.append("username", this.state.username);
        urlencoded.append("password", this.state.password);
        urlencoded.append("place_name", this.state.place_name);
        urlencoded.append("address", this.state.address);


        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow",
        };

        fetch(
            "http://localhost/ProductionMove/ProductionMove/public/api/admin/update_account",
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
                    <h4 className="modal-title w-100 font-weight-bold">CẬP NHẬT THÔNG TIN TÀI KHOẢN</h4>
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
                            onChange={this.setParams}
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
                            onChange={this.setParams}
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
                            onChange={this.setParams}
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


                </div>
                <div className="modal-footer d-flex justify-content-center">
                    <button className="btn btn-default" onClick={this.callApiUpdateAccount}>ADD</button>
                </div>
            </form>
        );
    }
}

export default UpdateAccount;