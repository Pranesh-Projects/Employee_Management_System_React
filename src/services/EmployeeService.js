import axios from "axios";

const Employee_App_Base_Url = "http://localhost:8080/api/v1/employees";

class EmployeeService {
	getEmployee() {
		return axios.get(Employee_App_Base_Url);
	}

	createEmployee(employee){
		return axios.post(Employee_App_Base_Url, employee);
	}

	getEmployeeById(employeeId){
		return axios.get(Employee_App_Base_Url + '/' + employeeId);
	}

	updateEmployee(employee,employeeId){
		return axios.put(Employee_App_Base_Url + '/' + employeeId, employee);
	}

	deleteEmployee(employeeId){
		return axios.delete(Employee_App_Base_Url + '/' + employeeId);
	}
}

export default new EmployeeService();
