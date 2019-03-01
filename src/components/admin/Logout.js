import React,{Component} from 'react'

import {auth} from '../../base'

class Logout extends Component{
    componentDidMount(){
        auth.signOut().
            then(()=>{
                window.location = '/'
            })
            .catch(console.log)
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}
export default Logout