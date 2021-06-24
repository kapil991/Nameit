import React from 'react'
import './SearchBox.css'
export default function SearchBox({onInputChange}) {
    return (
        <div className='searchbox-container'>
            <input onChange={(e)=>onInputChange(e.target.value)}
             className='searchbox-input' placeholder='Enter your keywords here' />
        </div>
    )
}
