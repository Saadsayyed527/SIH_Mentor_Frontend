import React, { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    // Add the Calendly script dynamically
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ minWidth: '320px', height: '700px' }}>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/saadsayyed480"
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </div>
  );
};

export default CalendlyWidget;
