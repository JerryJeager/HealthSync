import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import '../index.css';

import Contact from '../pages/Contact.jsx';
import Home from '../pages/Home.jsx';
import AuthRoutes from './auth.routes.jsx';
import DashboardRoutes from './dashboard.routes.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  AuthRoutes,
  DashboardRoutes,
]);

export default router;
