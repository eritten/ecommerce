import React, {useEffect} from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  
    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === 'Escape' && isOpen) {
            onClose();
          }
        };
    
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [isOpen, onClose]);
      
  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50" 
        aria-label='Modal overlay press ESC to close'
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96" aria-label='Modal open, press ESC to close'>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
