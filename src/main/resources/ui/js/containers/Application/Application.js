import React from "react";
import {Provider} from "react-redux";
import store from "../../store"
import RegistrationForm from "../RegistrationForm"
import {BrowserRouter, Route, Link} from "react-router-dom";
import AuthForm from "../AuthForm";

class Application extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Link to={"/"}>Вход</Link>
                    <Link to={"/registration"}>Регистрация</Link>
                    <Route path={"/"} exact component={AuthForm}/>
                    <Route path={"/registration"}  component={RegistrationForm}/>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default Application;