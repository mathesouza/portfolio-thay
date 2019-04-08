import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';

import base from '../../base';
import Loader from '../../Loader';

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
        if(this.state.limitToLast===6){
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
                {
                    this.state.artes.length===0 &&
                    <Loader/>
                }
                <div className='container gallery' style={{backgroundColor:'rgba(255, 255, 255, 0.70)',marginTop:'auto',paddingBottom:'15px'}} id='gallery' >
                    <div style={{marginTop:'65px'}}>
                        <Gallery        
                            rowHeight={400}
                            backdropClosesModal={true}
                            images={artes}
                            margin={10}
                            enableImageSelection={false}
                        />
                    </div>
                        
                </div>
                <div className='center'>
                    <button className='btn bg-gradient-left' disabled={this.state.artes.length<=this.state.limitToLast} onClick={this.handleClick}>Carregar mais</button>
                </div>
            </div>
        )
    }
}
export default GalleryArts
