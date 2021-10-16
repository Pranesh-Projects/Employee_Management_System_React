import React, {Component} from "react";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // initializing value for all 3 as '' empty string
            // Step 2
            id: this.props.match.params.id,
            firstName: "",
            lastName: "",
            emailId: "",
        };

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this); // 1st method to bind , 2nd line- 83
    }

    // step 3  -  get 'employee' object by 'id'
    // componentDidMount() {
    // 	// step 4  -  id = -1 => create, id != -1 => update
    // 	if (this.state.id === '_add') {
    // 		return
    // 	}
    // 	else {
    // 		EmployeeService.getEmployeeById(this.state.id).then((res) => {
    // 			console.log(res.data);
    // 			let employee = res.data;
    // 			console.log(employee);
    // 			this.setState({
    // 				firstName: employee.firstName,
    // 				lastName: employee.lastName,
    // 				emailId: employee.emailId
    // 			});
    // 		});
    // 	}
    // }

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

    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId,};
        console.log('employee =>' + JSON.stringify(employee));

        // step 5  -  id = -1 => createEmployee, id != -1 => updateEmployee
        // if (this.state.id === '_add') {
        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push("/employees");
        })
        // }
        // else {
        // 	EmployeeService.updateEmployee(employee, this.state.id).then(res => {
        // 		this.props.history.push("/employees");
        // 	})
        // }

    }

    cancel() {
        this.props.history.push("/employees");
    }

    // step 7
    getTitle() {
        // if (this.state.id === '_add') {
        return <h3 className="text-center">Add Employee</h3>
        // }
        // else {
        // 	return <h3 className="text-center">Update Employee</h3>
        // }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {/*<h3 className="text-center">Add Employee</h3>*/}
                            {this.getTitle()}
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
                                        onClick={this.saveOrUpdateEmployee}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel.bind(this)}  // 2nd method to bind 'on the spot'
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

export default CreateEmployeeComponent;
