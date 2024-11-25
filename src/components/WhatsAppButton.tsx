import './WhatsAppButton.css';
const WhatsAppButton = () => {
    return (
    <div className="fixed bottom-4 right-4 z-50">
      <a 
        href="https://wa.me/919848069384"
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp"
        />
      </a>
      </div>
    );
  };
  
  export default WhatsAppButton;