import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRoutes } from 'react-router-dom';
import { TechStack } from './pages/TechStack';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
// Create a client
const queryClient = new QueryClient();

function App() {
  const routes = useRoutes([
    {
      path: '',
      element: <Home />,
    },
    {
      path: '/techstack',
      element: <TechStack />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Header />
        {routes}
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
