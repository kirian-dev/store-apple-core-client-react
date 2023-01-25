import { FC } from 'react';
import { MainProvider } from './providers';
import { AppRoutes } from './routes';

const App: FC = () => {
  return (
    <MainProvider>
      <AppRoutes />
    </MainProvider>
  );
};
export default App;
