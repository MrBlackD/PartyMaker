import React from "react";
import { Provider } from "react-redux";
import store from "../../store"
import RegistrationForm from "../RegistrationForm"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AuthForm from "../AuthForm";
import EventFeed from "../EventFeed/EventFeed";
import { Grommet } from 'grommet';


class Application extends React.Component {
    render() {
        return (
            <Grommet plain>
                <Provider store={store}>
                    <BrowserRouter>
                        <Link to={"/"}>Вход</Link>
                        <Link to={"/registration"}>Регистрация</Link>
                        <Switch>
                            <Route path={"/registration"} component={RegistrationForm} />
                            <AuthForm>
                                <Route path={"/"} exact render={props => <EventFeed />} />
                            </AuthForm>
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </Grommet>
        )
    }
}

export default Application;