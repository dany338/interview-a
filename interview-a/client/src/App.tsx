import { Suspense } from 'react';
import AppRouter from './AppRouter';

const App = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <AppRouter />
  </Suspense>
)

export default App;