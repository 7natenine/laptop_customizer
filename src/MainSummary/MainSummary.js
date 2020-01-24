import React from 'react';
import CartTotal from '../CartTotal/CartTotal';
import ListItem from '../ListItem/ListItem';

function MainSummary(props) {
  return(
    <section className="main__summary"> 
      <h2>Your Cart</h2>

      { Object.keys(props.selected).map((feature,idx) => {
        const featureHash = feature + '-' + idx; 
        const selectedOption = props.selected[feature];

        return(
          <ListItem featureHash={featureHash} selectedOption={selectedOption} feature={feature} key={idx}/>
        )
      })}

      <CartTotal selected={props.selected}/> 
    </section>
  )
}

export default MainSummary