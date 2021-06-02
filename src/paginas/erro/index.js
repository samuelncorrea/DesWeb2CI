import {Link} from 'react-router-dom'

function Erro() {
    return (
      <div>
        <h1> :( ops, esta página não existe xD 🤢</h1>
        <Link to='/home'>Entrar na laudi</Link>
      </div>
    );
  }
  
  export default Erro;