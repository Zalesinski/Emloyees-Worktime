import React, {Component} from "react";
// import {getEmployees, getWorklog} from "./api";
import {connect, Provider} from "react-redux";
import EmployeesList from "./components/EmployeesList";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import EmployeeWorktime from "./components/EmployeeWorktime";
import {getEmployees, getEmployeesData} from "./redux/reducerE";
import store from "./redux/store"
import {getWorkingLogData} from "./redux/reducerW";

class App extends Component {
    state = {
        loading: true,
    };



    render() {
        const {loading} = this.state;

        if (loading) {
            return "Loading...";
        }

        return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={EmployeesList}/>
            <Route exact path="/worklog/:id" component={EmployeeWorktime}/>
        </Switch>
    </BrowserRouter>







        );
    }

    componentDidMount() {
        this.setState({
            loading: false
        });
    }
}



export default App;
