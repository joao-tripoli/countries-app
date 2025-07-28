import CountriesPage from './pages/countries';
import QueryProvider from './providers/QueryProvider';
import ToastProvider from './providers/ToastProvider';

function App() {
  return (
    <ToastProvider>
      <QueryProvider>
        <CountriesPage />
      </QueryProvider>
    </ToastProvider>
  );
}

export default App;
