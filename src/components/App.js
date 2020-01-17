import React from "react";
import "../css/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../views/Inicio";
import BlogPost from "../views/BlogPost";
import AllPosts from "./allPosts/AllPosts";
import Footer from "./Footer/Footer";
import CategoryPosts from "../views/CategoryPosts";
import Navcontent from './Navcontent/Navcontent';
import Header from './header/Header';
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from './Backdrop/Backdrop';

class App extends React.Component {
  state = {
    section:[],
    sideDrawerOpen: false
  };

  componentDidMount() {
    fetch('http://prosisdev.sytes.net:84/api/inicio')
      .then(res => res.json() )
      .then(data => {
        if(data) {
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

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false})
  }

  render() {
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer section={this.state.section}/>;
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div className="App" style={{height: '100%'}}>
        <BrowserRouter>
        <Navcontent 
          section={this.state.section}
          drawerClickHandler={this.drawerToggleClickHandler}
        >

        </Navcontent>
        {sideDrawer}
        {backdrop}
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
