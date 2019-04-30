import React from "react";
import {Provider} from "react-redux";
import store from "../../store"
import RegistrationForm from "../RegistrationForm"
import {BrowserRouter, Route, Link} from "react-router-dom";
import AuthForm from "../AuthForm";
import EventFeed from "../EventFeed/EventFeed";

class Application extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Link to={"/"}>Вход</Link>
                    <Link to={"/registration"}>Регистрация</Link>
                    
                    <Route path={"/registration"}  component={RegistrationForm}/>
                    <AuthForm>
                        <Route path={"/"} exact render={props=><EventFeed/>}/>
                    </AuthForm>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default Application;