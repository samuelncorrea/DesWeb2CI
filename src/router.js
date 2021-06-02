import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom";
import Login from './paginas/login'
import Home from './paginas/home'
import Erro from './paginas/erro'
import Produto from "./paginas/produto";

function Rotas() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Login></Login>
            </Route>
            <Route exact path="/home">
                <Home></Home>
            </Route>
            <Route exact path="/produto/id:">
                <Produto></Produto>
            </Route>
            <Route exact path="*">
                <Erro></Erro>
            </Route>
        </Switch>
        </BrowserRouter>
    );
  }
  
  export default Rotas;