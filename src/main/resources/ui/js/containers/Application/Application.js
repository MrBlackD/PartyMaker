import React from "react";
import {Provider} from "react-redux";
import store from "../../store"
import RegistrationForm from "./components/RegistrationForm";

class Application extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <h1>Форма регистрации</h1>
                <RegistrationForm />
            </Provider>
        )
    }
}

export default Application;