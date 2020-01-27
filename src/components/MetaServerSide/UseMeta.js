import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Metas from './Metas';

class UseMeta extends Component {
    render(){
        return(
            <Metas 
                title="Awesome website"
                description="Awesome description about my website"
                ogtitle="Another description"
                ogimage="./public/img/awesome-image.png"
            />
        )
    }
}

ReactDOM.render(<UseMeta />, document.getElementById('root'));