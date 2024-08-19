import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const duration = 3000;

interface ToastProps {
  id: number;
  typeError?: string;
  errorMessage?: string;
  handleOnClose: (id: number) => void;
}

const Toast: React.FC<ToastProps> = ({ id, typeError, errorMessage, handleOnClose }) => {
  const toastType = typeError || 'info';

  return (
    <div
      className={`fixed top-4 right-4 max-w-[150px] md:max-w[250px] lg:max-w-[300px] flex justify-center items-center p-2 rounded-md shadow-md bg-white overflow-hidden transition-all duration-300 ease-in-out`}
      style={{ animation: `slideInRight ease .3s, fadeOut linear 1s 3s forwards` }}
    >
      <div className={`toast ${toastType} flex items-center mr-2`}>
        <i className={`fa-solid ${toastType === 'success' ? 'fa-circle-check' : toastType === 'info' ? 'fa-circle-info' : toastType === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-exclamation'}`} />
      </div>
      <div className="flex-grow">
        <h4 className="font-bold text-lg mb-1">{typeError || 'Notification'}</h4>
        <p className="text-gray-600 text-sm line-clamp-3">{errorMessage}</p>
      </div>
      <i onClick={() => handleOnClose(id)} className="fa-solid fa-xmark text-gray-400 cursor-pointer hover:text-gray-600 ml-4" />
    </div>
  );
};

const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  useEffect(() => {
    const handleShowToast = (event: CustomEvent<ToastProps>) => {
      setToasts((prevToasts) => [...prevToasts, { ...event.detail, id: Date.now() }]);
      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.slice(1));
      }, duration);
    };

    window.addEventListener('show-toast', handleShowToast as EventListener);

    return () => {
      window.removeEventListener('show-toast', handleShowToast as EventListener);
    };
  }, []);

  const handleOnClose = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== id));
  };

  return ReactDOM.createPortal(
    <div className="fixed z-[4] top-4 right-4 flex flex-col space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} handleOnClose={handleOnClose} />
      ))}
    </div>,
    document.body
  );
};

export function showToastMessage(typeError: string, errorMessage: string) {
  const event = new CustomEvent('show-toast', {
    detail: { typeError, errorMessage },
  });
  window.dispatchEvent(event);
}

export default ToastContainer;