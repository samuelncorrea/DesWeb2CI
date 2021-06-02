import React , {Component} from 'react';
import './style.css'

class Aluno extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: this.props.nome,
            ra: this.props.ra,
            media: ''
        }
    }
    mostraNota = () =>{
        this.setState(
            {
                media: this.props.media
            }
        )
    }
    render(){
        return(
            <div className='card'>
                <h1>Nome: {this.state.nome}</h1>
                <h2>RA: {this.state.ra}</h2>
                <h2>{this.state.media}</h2>
                <button onClick={this.mostraNota}>Mostra Nota</button>
            </div>
        )
    }
}

export default Aluno;
