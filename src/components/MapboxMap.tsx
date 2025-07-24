import React from 'react';

interface MapboxMapProps {
  className?: string;
}

const MapboxMap: React.FC<MapboxMapProps> = ({ className }) => {
  return (
    <div className={`w-full h-96 rounded-lg overflow-hidden ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.123456789!2d33.41809203059689!3d-8.916664593717877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTUnMDAuMCJTIDMzwroyNScwNS4xIkU!5e0!3m2!1sen!2stz!4v1234567890123!5m2!1sen!2stz"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '400px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="HDA Company Limited Location - Iyunga, Mbeya, Tanzania"
      />
    </div>
  );
};

export default MapboxMap;