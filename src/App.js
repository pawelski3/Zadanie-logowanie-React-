import React, { Component } from 'react';

class App extends Component {
  state = {
    email: '',
    emailPlacehholder:'',
    password: '',
    passwordPlacehholder:'',
    emailClass:'',
    passClass:'',
    isSubmitted: false,
  };

  handleLogin = () => {
    console.log("email: " + this.state.email, "Pass: " + this.state.password);
    //(this.state.email&&this.state.password)?this.setState({ isSubmitted: true }):this.setState({ emailph: "Mail is required", passph: "Password is required",emailClass:'red',passClass:'red' })
    if(this.state.email&&this.state.password){this.setState({ isSubmitted: true })}
    if(!this.state.email){this.setState({ emailPlacehholder: "E-mail is required", emailClass:'red' })}
    if(!this.state.password){this.setState({ passwordPlacehholder: "Password is required",passClass:'red' })}
  }
  
  handleChange = (e) => {
    this.setState({ email: e.target.value, emailPlacehholder:'',emailClass:'' })
  }

  handlePass = (e) => {
    this.setState({ password: e.target.value,passwordPlacehholder:'',passClass:'' })
  };

  handelLogout = () => {
    this.setState({ password: '', email: '', isSubmitted: false });

  }

  render() {
    return (
      <>
        {this.state.isSubmitted === false && (
          <section>

            <div >
              <label>E-mail:</label>
              <input className={this.state.emailClass} onChange={this.handleChange} value={this.state.email} placeholder={this.state.emailPlacehholder} />

            </div>
            <div>
              <label>Password:</label>
              <input className={this.state.passClass} type="password" onChange={this.handlePass} value={this.state.password} placeholder={this.state.passwordPlacehholder} />
            </div>

            <button onClick={this.handleLogin}>Login</button>
          </section>
        )}
        {this.state.isSubmitted === true && (
          <section>

            <button onClick={this.handelLogout}>Logout</button>

          </section>
        )}
      </>



    )
  };
};


export default App;
