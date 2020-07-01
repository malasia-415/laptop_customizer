import React from 'react';


function SummaryOptions(props) {
    return (
        <div className="summary__option" key={props.featureHash}>
        <div className="summary__option__label">{props.feature} </div>
        <div className="summary__option__value">{props.optionName}</div>
        <div className="summary__option__cost">
          {props.USCurrencyFormat.format(props.optionCost)}
        </div>
      </div>
)
    
}

export default SummaryOptions;
