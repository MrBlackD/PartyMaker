import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { auth } from "../../actionCreators/authActionCreators";
import { Box, Form, FormField, Button, Heading, TextInput } from "grommet";
import { BrowserRouter, Route, Link } from "react-router-dom";

class AuthForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        console.log(this);
        axios.get("http://localhost:8080/auth", {
            params: { login: this.login.value, password: this.password.value }
        }).then((res) => {
            console.log(res)
            this.props.auth(res.data.authToken)
        }).catch(err => {
            alert(err);
        })
    }
    render() {
        if (this.props.authToken != null) {
            return this.props.children;
        } else {
            return (
                <React.Fragment>
                    <Heading margin="none">Вход</Heading>
                    <Box direction="column" width="medium" pad="small" border={{ color: 'brand', size: 'medium' }}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormField label="Login">
                                <TextInput placeholder="Enter your login" ref={(ref) => this.login = ref} />
                            </FormField>
                            <FormField label="Password">
                                <TextInput type={"password"} placeholder="Enter your password" ref={(ref) => this.password = ref} />
                            </FormField>
                            <Button primary label="Log In" type={"submit"}/>
                            <Link to="/registration">Регистрация</Link>
                        </Form>
                    </Box>
                </React.Fragment>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    authToken: state.auth
})

export default connect(mapStateToProps, { auth })(AuthForm);