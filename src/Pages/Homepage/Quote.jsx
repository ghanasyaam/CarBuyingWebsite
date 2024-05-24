import React from 'react';
import quoteImage from './Special-insights-into-the-ideal-birthplace-of-all-Porsche-sports-cars.jpg';
import './QuoteStyle.css';

const Quote = () => {
  return (
    <div className="window" style={{ backgroundImage: `url(${quoteImage})` }}>
      <div style={{ backgroundColor: 'rgba(245, 245, 220, 0.589)', width: '90vw', height: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <quote>"At 200 mph, the Porsche 956 generates enough downforce that it could theoretically drive upside down on the roof of a tunnel."</quote>
      </div>
    </div>
  );
}

export default Quote;
