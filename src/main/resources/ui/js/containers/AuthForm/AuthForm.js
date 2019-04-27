import React from "react";
import axios from "axios";

class AuthForm extends React.Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(e);
        console.log(this);
        axios.get("http://localhost:8080/auth",{
            params:{login:this.login.value,password:this.password.value}
        }).then((res)=>{
            console.log(res)
            alert("auth tokern: " +res.data.authToken)
        }).catch(err=>{
            alert(err);
        })
    }
    render(){
        
        return (
            <div>
                <h1>Вход</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type={"text"} name={"login"} placeholder={"Enter your login"} ref={(ref)=>this.login = ref}/>
                    <input 
                        type={"password"} 
                        name={"password"} 
                        placeholder={"Enter your password"} 
                        ref={(ref)=>this.password = ref}
                    />
                    <button type={"submit"}>Log In</button>
                </form>
            </div>
        )
    }
}

export default AuthForm;