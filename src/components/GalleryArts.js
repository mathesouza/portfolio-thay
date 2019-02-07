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
            state: 'artes',
            asArray:true
        })

    }
    render(){
        this.state.artes.reverse()
        return(
            <div className='container' id='gallery'>
                <Gallery images=
                {
                    Object.keys(this.state.artes).map((key)=>{
                        const arte = this.state.artes[key]
                        let teste={
                            src: arte.src,
                            thumbnail: arte.src,
                            thumbnailWidth: arte.thumbnailWidth,
                            thumbnailHeight:arte.thumbnailHeight,
                            caption:arte.sub,
                            tags: [{value: arte.titulo, title: "titulo"}]
                        }
                        return teste
                    })
                } rowHeight='240' />
            </div>
        )
    }
}
export default GalleryArts
