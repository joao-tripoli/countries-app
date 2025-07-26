import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CountriesPage from './countries/CountriesPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CountriesPage />
    </QueryClientProvider>
  );
}

export default App;
