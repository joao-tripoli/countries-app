import { createContext } from 'react';

export type ToastContextProps = {
  showSuccess: (message: string, duration?: number) => void;
  showError: (message: string, duration?: number) => void;
  showInfo: (message: string, duration?: number) => void;
};

export const ToastContext = createContext<ToastContextProps>({
  showSuccess: () => {},
  showError: () => {},
  showInfo: () => {},
});
