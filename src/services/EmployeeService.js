import axios from "axios";

// const Employee_App_Base_Url = "http://localhost:8080/api/v1";
const Employee_App_Base_Url = "https://employee-management-app-sb.herokuapp.com/api/v1";

class EmployeeService {
    getEmployee() {
        return axios.get(`${Employee_App_Base_Url}/employees`);
    }

    createEmployee(employee) {
        return axios.post(`${Employee_App_Base_Url}/employees`, employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(`${Employee_App_Base_Url}/employee/${employeeId}`);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(`${Employee_App_Base_Url}/employee/${employeeId}`, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(`${Employee_App_Base_Url}/employee/${employeeId}`);
    }
}

export default new EmployeeService();
