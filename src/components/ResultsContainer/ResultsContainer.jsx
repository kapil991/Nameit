import React from 'react'
import './ResultContainer.css'
import NameCard from '../NameCard/NameCard'
export default function ResultsContainer({suggestedNames}) {
    const suggestedNamesJSX = suggestedNames.map(suggestedName => {
        return <NameCard key={suggestedName} suggestedName={suggestedName}/>
    })
    return (
        <div className='results-container'>
            {suggestedNames.length>0 && suggestedNamesJSX}
        </div>
    )
}
