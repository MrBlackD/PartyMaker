import React from "react";
import axios from "axios";

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
            <div>
                <h1>Регистрация</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Логин
                        <input type="text" name="login" id="login" ref={ref=>this.login = ref}/>
                    </label>
                    <label>
                        Пароль
                        <input type="text" name="password" id="password" ref={ref=>this.password = ref}/>
                    </label>
                    <input type="submit" value="Отправить" />
                </form>
            </div>
        );
    }
}

export default RegistrationForm;