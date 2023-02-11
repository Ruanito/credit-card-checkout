import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Checkout from './pages/Checkout';
import NewCard from './pages/NewCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Checkout />
  },
  {
    path: '/new',
    element: <NewCard />
  },
]);

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
