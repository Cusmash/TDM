import React from 'react';
import MetaTags from 'react-meta-tags';

class Metas extends React.Component {
  render() {
    return (
      <div>
        <MetaTags>
            {/* <title>Hola desde BlogPost</title>
            <meta property="og:image" content={image} />
            <meta property="og:url"  content={ruta} /> */}
            <title>{this.props.title}</title>
              <meta name="description" content={this.props.description} />
              <meta property="og:title" content={this.props.ogtitle} />
              <meta property="og:image" content={this.props.ogimage} />
        </MetaTags>
      </div>
    )
  }
}
export default Metas;