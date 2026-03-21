export function ChurchMap({ height = '300', className = '' }) {
  return (
    <div className={`overflow-hidden rounded-2xl shadow-lg ${className}`}>
      <iframe
        title="GRC Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.5!2d-73.6582!3d45.4944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc917bce0a0e22d%3A0x0!2s5275+Rue+Ferrier%2C+Montr%C3%A9al%2C+QC+H4P+1L7!5e0!3m2!1sen!2sca!4v1"
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </div>
  );
}
