import React from 'react';
import Options from './Options';

class Features extends React.Component {


    render() {

    const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
  
        return (
          <Options 
            features={this.props.features}
            feature={feature}
            selected={this.props.selected}
            updateFeature={this.props.updateFeature}
            USCurrencyFormat={this.props.USCurrencyFormat}
            featureHash={featureHash}
          />
         );
      });
    
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
    )
}
}

export default Features;
