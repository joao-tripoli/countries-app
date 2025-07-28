import { Toast, type ToastType } from '@vibe/core';
import { useState, type ReactNode } from 'react';
import { ToastContext } from '../context/ToastContext';

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [toastType, setToastType] = useState<ToastType>('normal');
  const [duration, setDuration] = useState(4000);

  const showMessage =
    (severityType: ToastType) => (text: string, durationValue?: number) => {
      setOpen(true);
      if (durationValue) setDuration(durationValue);
      setMessage(text);
      setToastType(severityType);
    };

  const showSuccess = showMessage('positive');
  const showError = showMessage('negative');
  const showInfo = showMessage('normal');

  const handleClose = () => setOpen(false);

  return (
    <ToastContext.Provider
      value={{
        showSuccess,
        showError,
        showInfo,
      }}
    >
      {children}

      <Toast
        open={open}
        type={toastType}
        autoHideDuration={duration}
        onClose={handleClose}
      >
        {message}
      </Toast>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
