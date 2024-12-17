import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from '../src/Pages/Home';
import Burgers from '../src/Pages/Burgers';
import Login from '../src/Pages/login';
import Pizza from '../src/Pages/Pizza';
import Restaurants from '../src/Pages/Restaurants';
import Restaurant1 from '../src/Pages/Restaurant1';
import Restaurant2 from '../src/Pages/Restaurant2';
import Restaurant3 from '../src/Pages/Restaurant3';
import Sushi from '../src/Pages/Sushi';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/Burgers',
        element: <Burgers />
      }, {
        path: '/Pizza',
        element: <Pizza />
      },{
        path: '/login',
        element: <Login />
      }, {
        path: '/Restaurants',
        element: <Restaurants />
      }, {
        path: '/Restaurant1',
        element: <Restaurant1 />
      }, {
        path: '/Restaurant2',
        element: <Restaurant2 />
      }, {
        path: '/Restaurant3',
        element: <Restaurant3 />
      }, {
        path: '/Sushi',
        element: <Sushi />
      },
    ],
  },
]);

const rootElement = document.getElementById('root');

if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}