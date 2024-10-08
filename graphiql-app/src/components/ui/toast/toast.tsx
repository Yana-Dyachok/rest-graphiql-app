import { ToastContainer } from 'react-toastify';
import toastProps from './toast-style-props';

function Toast() {
  return <ToastContainer {...toastProps} />;
}

export default Toast;
