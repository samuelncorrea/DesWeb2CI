import {Link, useParams} from 'react-router-dom'

function Produto() {
    const {id} = useParams();
    return (
      <div>
        <h1>Produto: {id} </h1>
        <Link to='/home'>Volte para a loudi</Link>
      </div>
    );
  }
  
  export default Produto;