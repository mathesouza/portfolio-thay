import React,{Component} from 'react'
import { Redirect } from 'react-router-dom'

import {auth} from '../base'

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLogging:false,
            isLogged:false,
            error:false,
            email:null,
            password:null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)

    }

    handleChange(e){
        let change = {}
        change[e.target.id] = e.target.value
        this.setState(change)
    }
    handleLogin(e){

        this.setState({
            isLogging:true,
            error:false
        })
        auth
        .signInWithEmailAndPassword(this.state.email,
                                    this.state.password)
        .then((user)=>{
            this.setState({
                error:false,
                isLogged:true
            })
            window.location = '/admin/nova-arte'
        })
        .catch((err)=>{
            this.setState({
                isLogging:false,
                error:true
            })
        })

        e.preventDefault()
    }
    render(){
        if(this.state.isLogged){
            return <Redirect to='/'></Redirect>
        }
        return(
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-sm-6 col-md-3'>
                        <form className='form-container'>
                            <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" onChange={this.handleChange} />
                        </div>
                            <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input type="password" className="form-control" id="password" onChange={this.handleChange} />
                        </div>
                        <button className="btn btn-primary btn-block" disabled={this.state.isLogging} onClick={this.handleLogin}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login
