import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { auth } from '../../base'
import Loader from '../../Loader';

class Logout extends Component{
    constructor(props){
        super(props)
        this.state = {
            logoutSucess:false
        }
    }
    componentDidMount(){
        auth.signOut()
            .then(()=>{
                this.setState({logoutSucess:true})
            })
            .catch(console.log)
    }
    render(){
        if(this.state.logoutSucess){
            return(
                <div>
                    <Redirect to='/'/>
                </div>
            )
        }else{
            return <Loader/>
        }
    }
}
export default Logout