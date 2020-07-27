import React from 'react';
import Total from './Total';
import SummaryOptions from './SummaryOptions';

class Summary extends React.Component {
    render() {

        const summary = Object.keys(this.props.selected).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const selectedOption = this.props.selected[feature];
    
          return (
            <SummaryOptions 
              featureHash={featureHash}
              feature={feature}
              optionName={selectedOption.name}
              optionCost={selectedOption.cost}
              USCurrencyFormat={this.props.USCurrencyFormat}
            /> 
            // <div className="summary__option" key={featureHash}>
            //   <div className="summary__option__label">{feature} </div>
            //   <div className="summary__option__value">{selectedOption.name}</div>
            //   <div className="summary__option__cost">
            //     {this.props.USCurrencyFormat.format(selectedOption.cost)}
            //   </div>
            // </div>
          );
        });
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total 
                  total={this.props.total}
                  USCurrencyFormat={this.props.USCurrencyFormat}
                />
                </section>
            );
        }

}



export default Summary;
