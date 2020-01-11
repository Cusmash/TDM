import React from 'react';
import SearchCards from '../searchCards/SearchCards';
import SearchBox from '../searchBox/SearchBox';


class SearchBoxFetch extends React.Component {
    constructor(){
        super();
        this.state = {
            searchField: '',
            articulosTodos: []
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:8082/api/inicio/all')
          .then(res => res.json())
          .then(data => this.setState({
              articulosTodos: data.data
          }));
      }
      render(){
        const { articulosTodos, searchField } = this.state;
        const filteredArticulos = articulosTodos.filter(artTodos => artTodos.Nombre.toLowerCase().includes(searchField.toLowerCase()))
          return(
              <div>
              <SearchBox 
                  placeholder='Buscador...'
                  handleChange={e => this.setState({
                      searchField: e.target.value
                  })}
              />
                <SearchCards articulosTodos={filteredArticulos}/>
              </div>
          )
      }
}

export default SearchBoxFetch;