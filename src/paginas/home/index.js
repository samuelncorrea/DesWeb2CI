import React , { Component } from 'react';
import api from '../../servicos/api';
import './home.css'
import {Link} from 'react-router-dom'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            jogos: []
        }
        this.getJogos = this.getJogos.bind(this);
    }

    async getJogos(){
        await api.get('jogos').then((res)=>{
            console.log(res.data);
        })
        .catch(()=>{
            console.log("erro na api");
        })
    }

    componentDidMount(){
       this.getJogos();
    }

    render(){
        return(
            <div className="container">
                <div className="lista-jogos">
                    {
                        this.state.jogos.map((jogo)=>{
                            return(
                                <div key={jogo.id}>
                                    <h1>{jogo.nome}</h1>
                                    <img src={jogo.imagem}/>
                                    <Link to={`/jogo/${jogo.id}`}>Ver mais</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Home;