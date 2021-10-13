import axios from "axios";

const Employee_App_Base_Url = "http://localhost:8080/api/v1/employee";

class EmployeeService {
	getEmployee() {
		return axios.get(Employee_App_Base_Url);
	}
}

export default new EmployeeService();
