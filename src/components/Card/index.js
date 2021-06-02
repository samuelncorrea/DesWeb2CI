import React , {Component} from 'react'
import './style.css'

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            i:0,
            cor: ['#6C757D','#353535', '#3C6E71', '#FFFFFF', '#D9D9D9', '#284B63']
        }
    }
        mudarCor = ()=>{
            this.setState({ i: this.state.i + 1});
            if(this.state.i == this.state.cor.length -1){
            this.setState({i:0})
        }
    }
    render(){
        return(
            <div className='Card' style={{background: this.state.cor[this.state.i]}}>
                <h1>Samuel</h1>
                <button onClick={this.mudarCor}>Mudar Cor</button>
            </div>
        )
    }
}

export default Card; 