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
            <div id='teste'>
                <Gallery images=
                {
                    Object.keys(this.state.artes).map((key)=>{
                        const arte = this.state.artes[key]
                        let teste={
                            src: arte.src,
                            thumbnail: arte.src,
                            thumbnailWidth: arte.thumbnailWidth,
                            thumbnailHeight:arte.thumbnailHeight,
                        }
                        return teste
                    })
                }/>
            </div>
        )
    }
}
export default GalleryArts
