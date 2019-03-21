import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

import base from '../../base';
import Loader from '../../Loader';
import { mapStorageToGallery } from '../../services/images';

class GalleryArts extends Component {

    constructor(props){
        super(props)
        this.state = {
            artes:[],
            loading:true,
            limitToLast:6
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
        base.bindToState('/artes',{
            context: this,
            state: 'artes',
            asArray:true
        })
    }
    handleClick(){
        this.setState({limitToLast:this.state.limitToLast+3})
    }
    render(){
        if(this.state.limitToLast==6){
            this.state.artes.reverse()
        }
        let artes = []
        let cont = 0

        this.state.artes.forEach(arte => {
            if(cont<this.state.limitToLast){
                artes.push(arte)
                cont++;
            }
        });
        
        return(
            <div>
                {/*
                    this.state.artes.length<this.state.limitToLast &&
                    <Loader/>
                } */}
                <div className='container gallery' id='gallery'>
                    <Gallery        
                        rowHeight={400}
                        backdropClosesModal={true}
                        images={mapStorageToGallery(artes)}
                        margin={10}
                    />
                </div>
                <div className='center'>
                    <button className='btn bg-gradient-left' disabled={this.state.artes.length<this.state.limitToLast} onClick={this.handleClick}> Carregar mais</button>
                </div>
            </div>
        )
    }
}
export default GalleryArts
