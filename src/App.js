import React, {Component} from "react";
// import {getEmployees, getWorklog} from "./api";
import {connect, Provider} from "react-redux";
import EmployeesList from "./components/EmployeesList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import EmployeeWorktime from "./components/EmployeeWorktime";
import {getEmployees} from "./redux/reducerE";
import store from "./redux/store"

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
<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <EmployeesList/>
            </Route>
            <Route exact path="/worktime">
                <EmployeeWorktime/>
            </Route>
        </Switch>
    </BrowserRouter>
</Provider>







        );
    }

    componentDidMount() {
        // getData();
        this.setState({
            loading: false
        });
    }
}



export default App;
