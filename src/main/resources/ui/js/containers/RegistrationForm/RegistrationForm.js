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
            <div>
                <h1>Регистрация</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Логин
                        <input type="text" name="login" id="login"/>
                    </label>
                    <label>
                        Пароль
                        <input type="text" name="password" id="password"/>
                    </label>
                    <input type="submit" value="Отправить" />
                </form>
            </div>
        );
    }
}

export default RegistrationForm;