import React from "react";
import "../css/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../views/Inicio";
import BlogPost from "../views/BlogPost";
import AllPosts from "./allPosts/AllPosts";
import Footer from "../components/Footer";
import CategoryPosts from "../views/CategoryPosts";
import Navcontent from './Navcontent';
import Header from './header/Header';



class App extends React.Component {
  state = {
    section:[]
  };

  componentDidMount() {
    //OBTENER ARTICULOS DE INICIO http://prosisdev.sytes.net:84/api/inicio http://localhost:8082/api/inicio
    fetch('http://localhost:8082/api/inicio')
      .then(res => res.json() )
      .then(data => {
        if(data){
          let datosArticuloInicio = data.data[9]
          this.setState({
            section: datosArticuloInicio
          }); 
        } 
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App" style={{height: '100%'}}>
        <BrowserRouter>
        <Navcontent section={this.state.section}></Navcontent>
        <Header></Header>

          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/articulo/undefined" component={Inicio} />
            <Route exact path="/seccion/:section" component={CategoryPosts} />
            <Route exact path="/inicio/all" component={AllPosts} />
            <Route path="/articulo/:articuloId" component={BlogPost} />
            <Route render={() => <div>404 Not Found</div>} />
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
