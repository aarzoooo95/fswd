import React from 'react';
import './TestimonialCard.css'

function TestimonialCard({name,review}){
    return(
    <div className='testimonial-card'>
        <h2>{name}</h2>
        <p>'{review}'</p>
    </div>
    )
}


export default TestimonialCard;