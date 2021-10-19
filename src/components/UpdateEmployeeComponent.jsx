import React, {Component} from "react";
import EmployeeService from "../services/EmployeeService";

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // initializing value for all 3 as '' empty string
            id: this.props.match.params.id,
            firstName: this.props.match.params.first,
            lastName: this.props.match.params.last,
            emailId: this.props.match.params.mail,
        };

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this); // 1st method to bind , 2nd line- 83
    }

    changeFirstNameHandler = (event) => {
        this.setState({
            firstName: event.target.value, //  giving value for firstName as 'typed' string
        });
    };

    changeLastNameHandler = (event) => {
        this.setState({
            lastName: event.target.value, //  giving value for lastName
        });
    };

    changeEmailIdHandler = (event) => {
        this.setState({
            emailId: event.target.value, //  giving value for emailId
        });
    };

    updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(this.state,this.state.id);
        EmployeeService.getEmployee();
        this.props.history.push("/employees");
    };

    cancel() {
        this.props.history.push("/employees");
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input
                                            className="form-control"
                                            name="firstName"
                                            placeholder="first name"
                                            value={this.state.firstName} // to show in the box
                                            onChange={
                                                this.changeFirstNameHandler // to assign the value
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input
                                            className="form-control"
                                            name="lastName"
                                            placeholder="last name"
                                            value={this.state.lastName} // to show in the box
                                            onChange={
                                                this.changeLastNameHandler // to assign the value
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> EmailId: </label>
                                        <input
                                            className="form-control"
                                            name="emailId"
                                            placeholder="email Id"
                                            value={this.state.emailId} // to show in the box
                                            onChange={
                                                this.changeEmailIdHandler // to assign the value
                                            }
                                        />
                                    </div>
                                    <button
                                        className="btn btn-success"
                                        onClick={this.updateEmployee}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel.bind(this)} // 2nd method to bind 'on the spot'
                                        style={{marginLeft: "10px"}}
                                    >
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;
