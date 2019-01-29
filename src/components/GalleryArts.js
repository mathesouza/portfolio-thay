import React,{Component} from 'react';
import Gallery from 'react-grid-gallery';

import base from '../base';

const IMAGES =[{}]

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
                        let teste={
                            src:arte.foto,
                            thumbnail:arte.foto,
                        }
                        IMAGES.push(teste)
                    })

                }
                <Gallery images={IMAGES}/>
            </div>
        )
    }
}
export default GalleryArts
