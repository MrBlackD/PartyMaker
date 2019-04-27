import React from "react";

class RegistrationForm extends React.Component{
    constructor(props){
        super(props);
        
    }
    handleSubmit(e) {
        console.log(e);
        console.log('work');
        e.preventDefault();
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Логин
                    <input type="text" name="login" id="login"/>
                </label>
                <br />
                <label htmlFor="">Пароль
                    <input type="text" name="password" id="password"/>
                </label>
                <br />
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

export default RegistrationForm;