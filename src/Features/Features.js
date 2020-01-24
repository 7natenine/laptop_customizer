import React, { Component } from 'react'
import FeatureList from '../FeatureList/FeatureList';
// import '../App.css'

class Features extends Component { 
  render() {
    // const { selected,updateFeature,features } = this.props
    return(
    <form className="main__form">
      <h2>Customize your laptop</h2>
      <FeatureList 
        selected={this.props.selected} 
        updateFeature={this.props.updateFeature}
        features={this.props.features} />
    </form>
    );
  }
}

export default Features