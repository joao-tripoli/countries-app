import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CountriesPage from './countries/CountriesPage';
import ToastProvider from './providers/ToastProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <CountriesPage />
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
