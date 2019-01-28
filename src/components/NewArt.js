import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Base,{Storage} from '../base'

class novaArte extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){

        const file = this.foto.files[0]
        const {name,size} = file

        const ref = Storage.ref(name)

        ref.put(file).then(img =>{
            ref.getDownloadURL().then(url=>{

                var novaArte = {
                    titulo : this.titulo.value,
                    sub : this.descricao.value,
                    foto: url
                }
                console.log(novaArte)

                Base.push('artes',{
                    data: novaArte
                }).catch(err=>{
                    console.log(err)
                })
            }).catch(err=>{
                console.log(err)
            })
        }).catch(err=>{
            console.log(err)
        })

        e.preventDefault()
    }

    handleChange() {

    }

    render(){
        return(
            <div style={{marginTop:'120px',backgroundColor:'#fff'}}>

            <div className='container'>
                <h1>Nova arte</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='productName'>Título</label>
                            <input id='titulo' className='form-control' type='text' ref={(ref) => this.titulo = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='descricao'>Descrição </label>
                            <textarea id='descricao' className='form-control' ref={(ref) => this.descricao = ref} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='photo'>Foto</label>
                            <input id='photo' className='form-control-file' type='file' ref={(ref) => this.foto = ref} />
                        </div>
                        <button type='submit' className='btn btn-primary'>Salvar Anúncio</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default novaArte

//13:00
