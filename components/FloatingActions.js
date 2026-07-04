export default function FloatingActions() {
  return (
    <div className="floating-actions">
      <a href="https://wa.me/917676490777" target="_blank" rel="noopener" className="fab fab-whatsapp" aria-label="Chat on WhatsApp">
        <svg className="icon"><use href="#i-whatsapp" /></svg>
      </a>
      <a href="tel:+917676490777" className="fab fab-call" aria-label="Call restaurant">
        <svg className="icon"><use href="#i-phone" /></svg>
      </a>
    </div>
  );
}
