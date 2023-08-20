import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRoutes } from 'react-router-dom';
import { TechStack } from './pages/TechStack';
import { Home } from './pages/Home';
import { Menu } from './components/Menu';
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
        <Menu />
        {routes}
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
