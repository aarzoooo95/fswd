import React from 'react';
import TestimonialCard from './components/TestimonialCard';

function App(){
  return(
  <div style={{textAlign:'center'}}>
    <h1>TESTIMONIALS</h1>
    <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
      <TestimonialCard
      name="Emily Watson"
      review="This service was amazing! Highly recommended."
      />
      <TestimonialCard
      name="Aarzoo"
      review="i loved the service"
      />

    </div>
  </div>
  )
}
export default App;