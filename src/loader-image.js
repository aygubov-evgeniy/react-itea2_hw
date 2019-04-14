import React, { Component } from 'react';

class LoaderImage extends Component {
  state = {
    imageSrc: '',
    isImageLoaded: false
  }

  componentDidMount() {
    const { src } = this.props;
    this.setState({ imageSrc: src });
  }

  renderImage = () => {
    const { isImageLoaded } = this.state;
    this.setState({ isImageLoaded: !isImageLoaded });
  }
  
  render() {
    const { imageSrc, isImageLoaded } = this.state;
    const { renderImage } = this;

    return (
      <div className="gallery">
        <div className={ isImageLoaded ? "gallery-item" : "gallery-item gallery-item_hidden" }>
          <img src={imageSrc} onLoad={renderImage} />
        </div>

        {!isImageLoaded ? 
        (
          <div className="cssload-loader">
            <div className="cssload-inner cssload-one"></div>
            <div className="cssload-inner cssload-two"></div>
            <div className="cssload-inner cssload-three"></div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default LoaderImage;