import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    //creates a refernce to track the DOM html element this component creates
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //once the image has loaded, call the setSpan callback function
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  //calculate how many rows image should span and setState to trigger re-render
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
