import React, {Component} from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        };
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);

    }

    componentDidMount() {
        EmployeeService.getEmployee().then((res) => {
            this.setState({employees: res.data});
        });
    }

    addEmployee() {
        // step 6  -  added '-1' for the url
        this.props.history.push("/add_employee");
    }

    viewEmployee(e, employee) {
        this.props.history.push(`employee/${employee.id}/${employee.firstName}/${employee.lastName}/${employee.emailId}`);
    }

    deleteEmployee(id) {
        console.log(id);
        this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
    }

    editEmployee(e, employee) {
        this.props.history.push(`edit_employee/${employee.id}/${employee.firstName}/${employee.lastName}/${employee.emailId}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                        </thead>

                        <tbody>
                        {this.state.employees.map((employee) => (
                            <tr key={employee.id}>
                                <td> {employee.firstName} </td>
                                <td> {employee.lastName} </td>
                                <td> {employee.emailId} </td>
                                <td>
                                    <button className="btn btn-info"
                                            onClick={(e) => this.viewEmployee(e, employee)}>View
                                    </button>
                                    <button style={{marginLeft: "10px"}} className="btn btn-info"
                                            onClick={(e) => this.editEmployee(e, employee)}>Edit
                                    </button>
                                    <button style={{marginLeft: "10px"}} className="btn btn-danger"
                                            onClick={() => this.deleteEmployee(employee.id)}>Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
