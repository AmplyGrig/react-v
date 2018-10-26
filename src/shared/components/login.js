import React, { Component } from 'react';

import { Link } from 'react-router-dom';
class App extends Component {
    constructor(props) {
      super(props);
      this.state = {login: '', password: '',loginning:false};
  
      this.onLoginChange = this.onLoginChange.bind(this);
      this.onPasswordChange = this.onPasswordChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(event){
      if (this.state.login == this.state.password){
      alert(`${this.state.login}, добро пожаловать!`);
      this.setState({loginning: true});
      event.preventDefault();
      }
      else alert(`${this.state.login}, неверный пароль`);
      
    }
  
    onPasswordChange(event){
      this.setState({password: event.target.value});
    }
    
    onLoginChange(event) {
      this.setState({login: event.target.value});
    }
  
    render() {
      let div=null
      if(this.state.loginning){
        div = <p> hello , ${this.state.login}</p>;
      }
      else
      {
       div = <form onSubmit={this.onSubmit}>
        <p><label> Логин: <input type="text" name="login" value={this.state.login}
                         onChange={this.onLoginChange}/></label></p>
        <p><label> Пароль: <input type="password" name="password" value={this.state.password}
                          onChange={this.onPasswordChange}/></label></p>
        <p><input type="submit" value="Submit" /></p>
        <ul>
        <li><Link to='/'>На главную</Link></li>
        <li><Link to='/registration'>Зарегистрироваться</Link></li>
        </ul>
      </form>
      
      }
      return (
        div
      );
    }
  }

export default App;
