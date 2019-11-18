import React, { Component } from 'react';
import { connect } from 'react-redux';



import lithium_cabs_logo from '../../assets/lithium_cabs_logo.png';
import { signIn } from '../store/actions/authActions';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        }
        )
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.signIn(this.state)
    }
    render() {
        let authErr = false
        const validate = this.props.status
        if(validate === 'failed')
        authErr=true
        return (
                <div  style= {{padding: '10px'}} className="container center">
                <img style={{width: '400px', height: '300px'}} src={lithium_cabs_logo} alt="not found"></img>
                <form onSubmit={this.handleSubmit} className="white center" >
                    <h4 className="grey-text text-darken-3">Sign In</h4>
                    <div className="container" style = {{justifyContent: "center", diesplay:"flex"}}>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                    <button className="btn green lighten-2 z-depth-0">Login</button>
                    <div className="red-text center">
                    {authErr ? <p>Login failed!</p>: null}
                    </div>
                    </div>
                    </div>
                </form>
                </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        status : state.auth.authStatus
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);