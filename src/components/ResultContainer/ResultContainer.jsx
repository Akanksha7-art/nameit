import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css'

const ResultContainer = ({ suggestedNames }) =>{
    const suggestedNamesJSX = suggestedNames.map((suggestedName)=>{
        return <NameCard key={suggestedName} suggestedName={ suggestedName }/>
    });
    return(
        <div className="result-conatainer">{suggestedNamesJSX } </div>
    );
}
export default ResultContainer;