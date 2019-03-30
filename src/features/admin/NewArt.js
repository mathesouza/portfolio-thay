import React, {Component} from 'react'
import Resizer from 'react-image-file-resizer';

import Base,{Storage} from '../../base'
import Loader from '../../Loader'

class NewArt extends Component {

    constructor(props){
        super(props)
        this.state = {
            titulo:'',
            descricao:'',
            src:'',
            salvando:false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(e){

        this.setState({salvando:true})

        const file = this.foto.files[0]

        const {name} = file

        const ref = Storage.ref(name)

        ref.put(file).then(img =>{
            ref.getDownloadURL().then(url=>{
                const img = new Image()
                img.src = url
                
                img.onload = () => {
                let {height,width} = img
                var thumbnailHeight = 900
                let reference = height/thumbnailHeight
                var thumbnailWidth = width/reference

                    Resizer.imageFileResizer(
                        file,
                        thumbnailWidth,
                        thumbnailHeight,
                        'JPEG',
                        100,
                        0,
                        uri => {
                            const {name} = file
                            const ref = Storage.ref(name+'thumbnail')
            
                            ref.put(uri).then(imgThumbnail =>{
                                ref.getDownloadURL().then(urlThumbail=>{
                                    
                                    var novaArte = {
                                        titulo : this.titulo.value,
                                        sub : this.descricao.value,
                                        src: url,
                                        thumbnail: urlThumbail,
                                        thumbnailWidth:width,
                                        thumbnailHeight:height
                                    }
                
                                    Base.push('artes',{
                                        data: novaArte
                                    }).catch(err=>{
                                        console.log(err)
                                    })
                                    .then(
                                        window.location = '/'
                                    )
                    
                                }).catch(err=>{
                                    console.log(err)
                                })
                            }).catch(err=>{
                                console.log(err)
                            })
                            
                        },
                        'blob'
                    );

                }

            }).catch(err=>{
                console.log(err)
            })
        }).catch(err=>{
            console.log(err)
        })
        this.setState({salvando:false})
        e.preventDefault()
    }

    handleChange(e) {
        let change = {}

        change[e.target.id] = e.target.value

        this.setState(change)

    }

    render(){
        return(
            <div className='container form-art'>
               {
                   this.state.salvando &&
                   <Loader/>
               }
                <h1>Nova arte</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='productName'>Título</label>
                            <input id='titulo' className='form-control' type='text' onChange={this.handleChange} ref={(ref) => this.titulo = ref}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='descricao'>Descrição </label>
                            <textarea id='descricao' className='form-control' onChange={this.handleChange} ref={(ref) => this.descricao = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='src'>Foto</label>
                            <input id='src' className='form-control-file' type='file' onChange={this.handleChange} ref={(ref) => this.foto = ref} />
                        </div>
                        <button type='submit' disabled={this.state.salvando} className='btn btn-primary'>Salvar Arte</button>
                    </form>
                </div>
        )
    }
}
export default NewArt
