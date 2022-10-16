import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Shop from './components/Shop/Shop'
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoaders } from './loaders/productsAndCartLoaders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', loader: () => fetch('products.json'), element: <Shop></Shop> },
        {
          path: '/order',
          loader: productsAndCartLoaders,
          element: <Order></Order>
        },
        { path: 'inventory', element: <Inventory></Inventory> }
      ]
    },

    { path: '/about', element: <About></About> },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
