import React, {Component} from "react";
import EmployeesList from "./components/EmployeesList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import WorklogList from "./components/WorklogList";

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
                    <Route exact path="/worklog/:id" component={WorklogList}/>
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
