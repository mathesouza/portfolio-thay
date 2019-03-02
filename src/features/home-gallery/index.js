import React,{Component} from 'react';
import Gallery from 'react-grid-gallery';

import base from '../../base';
import Loader from '../../Loader';
import { mapStorageToGallery } from '../../services/images';

class GalleryArts extends Component {

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
        if(!this.state.artes.length){
            return(
                <Loader/>
            )
        }
        this.state.artes.reverse()
        return(
            <div className='container gallery' id='gallery'>
                <Gallery        
                    rowHeight={300}
                    backdropClosesModal={true}
                    images={mapStorageToGallery(this.state.artes)}
                />   
            </div>
        )
    }
}
export default GalleryArts
