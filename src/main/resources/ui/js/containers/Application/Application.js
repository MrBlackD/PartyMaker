import React from "react";
import {Provider} from "react-redux";
import store from "../../store"

class Application extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <h1>TEST</h1>
            </Provider>
        )
    }
}

export default Application;