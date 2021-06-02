import React , {Component} from 'react';
import './style.css'

class Relogio extends Component{
    constructor(props){
        super(props);
        this.state = {
            hora: '00:00:00',
            cont: 0
        }

        setInterval( ()=>{
            this.setState({
                hora: new Date().toLocaleTimeString()
            }
            )
        }, 1000);
    }



    componentDidMount(){

        setInterval( ()=>{
            this.setState({
                cont: this.state.cont + 1
            }
            )
        }, 1000);

    }
    

    render(){
        return(
            <div className='rel'>
                <h1> {this.state.hora}</h1>
                <h2>Desafios que o prof. queroga passou</h2>
                <h1> {this.state.cont}</h1>
            </div>
        )
    }
}

export default Relogio;
