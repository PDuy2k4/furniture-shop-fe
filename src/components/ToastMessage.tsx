// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const duration = 3000;

// interface ToastProps {
//   typeError?: string; // Optional error type
//   errorMessage?: string; // Optional error message
//   handleOnClose?: any
// }


// export function showToastMessage(typeError: string, errorMessage: string){
  
//   console.log('called')
//   const main = document.getElementById('toast')
  

//   if(main){
//     const toast = document.createElement('div');
//   //   const setTOClose = (function(){
//   //     main.removeChild(toast);
//   // }, duration + 1000);

//     const handleOnClose = function(){
//         main.removeChild(toast);
//     };
      
//       toast.innerHTML = `<Toast typeError= ${typeError} errorMessage= ${errorMessage} handleOnClose=${handleOnClose}/>`
      
//       main.appendChild(toast)
//       console.log(main)
//   }
// }

// const Toast: React.FC<ToastProps> = ({ typeError, errorMessage, handleOnClose }) => {

//   const toastType = typeError || 'info'; // Default to info if no type provided

//   return (
//     <div
//       className={`fixed top-30 right-30 flex justify-center items-center p-4 rounded-md shadow-md bg-white overflow-hidden transition-all duration-300 ease-in-out`}
//       style={{ animation: `slideInLeft ease .3s, fadeOut linear 1s 3s forwards` }}
//     >
//       <div className={`toast ${toastType} flex items-center mr-4`}>
//         <i className={`fa-solid ${toastType === 'success' ? 'fa-circle-check' : toastType === 'info' ? 'fa-circle-info' : toastType === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-exclamation'}`} />
//       </div>
//       <div className="flex-grow">
//         <h3 className="font-bold text-lg mb-2">{typeError || 'Notification'}</h3>
//         <p className="text-gray-600">{errorMessage}</p>
//       </div>
//       <i onClick={handleOnClose} className="fa-solid fa-xmark text-gray-400 cursor-pointer hover:text-gray-600 ml-4" 
//         />
//     </div>
//   );
// };

// export default Toast