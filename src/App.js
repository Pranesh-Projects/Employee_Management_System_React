import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
    return (
        <div>
            <Router>
                {/* <div className="container">  -  it puts like a box */}
                <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={ListEmployeeComponent}></Route>
                        <Route path="/employees" component={ListEmployeeComponent}></Route>
                        {/* Step 1 */}
                        <Route path="/add_employee" component={CreateEmployeeComponent}></Route>
                        <Route path="/employee/:id/:first/:last/:mail" component={ViewEmployeeComponent}></Route>
                        <Route path="/edit_employee/:id/:first/:last/:mail" component={UpdateEmployeeComponent}></Route>
                    </Switch>
                </div>
                <FooterComponent/>
                {/* </div> */}
            </Router>
        </div>
    );
}

export default App;
