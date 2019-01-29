import React,{Component} from 'react';
import Gallery from 'react-grid-gallery';

import base from '../base';

class GalleryArts extends Component{
    constructor(props){
        super(props)
        this.state = {
            artes:[]
        }
        base.bindToState('/artes',{
            context: this,
            state: 'artes'
        })
    }
    render(){
        return(
            <div>
                {
                    Object.keys(this.state.artes).map((key)=>{
                        const arte = this.state.artes[key]
                        return <img src={arte.foto}/>
                    })

                }
            </div>
        )
    }
}
export default GalleryArts 