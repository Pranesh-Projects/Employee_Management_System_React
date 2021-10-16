import React, {Component} from "react";

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            firstName: this.props.match.params.first,
            lastName: this.props.match.params.last,
            emailId: this.props.match.params.mail,
        };
    }

    BackButton() {
        this.props.history.push("/employees");
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Employee First Name : </label>
                            <div>{this.state.firstName}</div>
                        </div>
                        <div className="row">
                            <label>Employee Last Name : </label>
                            <div>{this.state.lastName}</div>
                        </div>
                        <div className="row">
                            <label>Employee Email ID : </label>
                            <div>{this.state.emailId}</div>
                        </div>
                        <button
                            className="btn btn-info"
                            onClick={this.BackButton.bind(this)}
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;
