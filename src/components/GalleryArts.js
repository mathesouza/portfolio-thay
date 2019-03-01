import React,{Component} from 'react';
import Gallery from 'react-grid-gallery';

import base from '../base';
import Loader from '../Loader';

class GalleryArts extends Component{
    constructor(props){
        super(props)
        this.state = {
            artes:[],
            loading:true
        }
        base.bindToState('/artes',{
            context: this,
            state: 'artes',
            asArray:true
        })

    }
    render(){
        // if(!this.state.artes.length){
        //     return(
        //         <Loader/>
        //     )
        // }
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
