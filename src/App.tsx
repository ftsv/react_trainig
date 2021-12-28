import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';



function App() {
  const router = (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
  return (
    router
  );
}

export default App;
