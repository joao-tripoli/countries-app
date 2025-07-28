import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useContext, type ReactNode } from 'react';
import { ToastContext } from '../context/ToastContext';

type Props = {
  children: ReactNode;
};

const QueryProvider = ({ children }: Props) => {
  const { showError } = useContext(ToastContext);

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (_, query) => {
        if (query.state.data !== undefined) return;
        showError(`Error fetching data`);
      },
    }),
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
