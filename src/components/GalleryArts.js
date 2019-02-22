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

                <div className='container gallery' id='gallery' >
                <Gallery  images=
                {
                    Object.keys(this.state.artes).map((key)=>{
                        const arte = this.state.artes[key]
                        let img={
                            src: arte.src,
                            thumbnail: arte.src,
                            thumbnailWidth: arte.thumbnailWidth,
                            thumbnailHeight:arte.thumbnailHeight,
                            caption:arte.sub
                        }
                        return img
                    })
                }   rowHeight={300}
                    backdropClosesModal={true}
                      
                />
                </div>

            )
    }
}
export default GalleryArts
