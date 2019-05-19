import React from "react";
import axios from "axios";
import { Box, Form, FormField, Button, Heading, TextInput } from "grommet";
import { BrowserRouter, Route, Link } from "react-router-dom";

class RegistrationForm extends React.Component{
    constructor(props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        axios.get("http://localhost:8080/reg",{
            params:{
                login:this.login.value,
                password:this.password.value
            }
        }).then((res)=>{
            console.log(res)
        }).catch(err=>{
            alert("Что то пошло не так")
            console.error(err)
        })
    }
    
    render(){
        return (
            <React.Fragment>
                <Heading margin="none">Регистрация</Heading>
                <Box direction="column" width="medium" pad="small" border={{ color: 'brand', size: 'medium' }}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormField label="Login">
                            <TextInput placeholder="Enter your login" ref={(ref) => this.login = ref} />
                        </FormField>
                        <FormField label="Password">
                            <TextInput type={"password"} placeholder="Enter your password" ref={(ref) => this.password = ref} />
                        </FormField>
                        <Button primary label="Sign In" type={"submit"}/>
                        <Link to="/login">Вход</Link>
                    </Form>
                </Box>
            </React.Fragment>
        );
    }
}

export default RegistrationForm;