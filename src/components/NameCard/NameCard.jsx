import React from 'react'
import './NameCard.css'
const namecheapurl='https://www.namecheap.com/domains/registration/results/?domain='
export default function NameCard({suggestedName}) {
    
    return (
        <a className='result-link' href={`${namecheapurl}${suggestedName}`}>
        <div className='result-name-card'>
            <p className='result-name'>{suggestedName}</p>
        </div>
        </a>
    )
}
