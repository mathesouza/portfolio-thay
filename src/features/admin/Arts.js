import React, { Component } from "react";
import Gallery from "react-grid-gallery";

import base, { Storage } from "../../base";
import { mapStorageToGallery } from "../../services/images";

class Arts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artes: [],
      loading: true,
      limitToLast: 6,
      imagens: []
    };

    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    base.bindToState("/artes", {
      context: this,
      state: "artes",
      asArray: true
    });
    let imagens = mapStorageToGallery(this.state.artes);
    console.log(imagens);
    this.setState({ imagens: imagens });
  }
  handleImageSelect(index, image) {
    console.log(this);
    var images = this.state.images.slice();
    var img = images[index];
    if (img.hasOwnProperty("isSelected")) img.isSelected = !img.isSelected;
    else img.isSelected = true;

    this.setState({
      selected: images
    });
  }
  handleDelete() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Gallery
          backdropClosesModal={true}
          images={mapStorageToGallery(this.state.artes)}
          enableImageSelection={true}
          onSelectImage={this.handleImageSelect}
        />
        <button className="btn btn-danger" onClick={this.handleDelete}>
          Deletar selecionadas
        </button>
      </div>
    );
  }
}
export default Arts;
