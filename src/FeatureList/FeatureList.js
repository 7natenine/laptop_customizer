import React from 'react'
import SelectFeature from '../SelectFeature/SelectFeature';
import slugify from 'slugify';

function FeatureList(props){
  return(
  Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return(
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name"> 
          <h3>{feature}</h3>
        </legend>
        {props.features[feature].map((item, id) => {
          const itemHash = slugify(JSON.stringify(item));
          return(
            <SelectFeature selected={props.selected} updateFeature={props.updateFeature} feature={feature} item={item} itemHash={itemHash} key={id}/> 
          )}
        )}
      </fieldset>
    );
  })
)}

export default FeatureList