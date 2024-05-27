import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mt-5">
      {faqs.map((faq, index) => (
        <div key={index} className="border-bottom pb-3 mb-3">
          <button
            className="d-flex align-items-center justify-content-between w-100 btn btn-link text-decoration-none"
            onClick={() => toggleFAQ(index)}
          >
            <span className="h5 mb-0" style={{ color: 'black' }}>{faq.question}</span>
            {activeIndex === index ? (
              <FontAwesomeIcon icon={faAngleUp} style={{ color: 'black' }} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} style={{ color: 'black' }} />
            )}
          </button>
          {activeIndex === index && (
            <p className="mt-2 text-muted" style={{ padding: '14px', whiteSpace: 'pre-line' }}>{faq.answer}</p>          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
