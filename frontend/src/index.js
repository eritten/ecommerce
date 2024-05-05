import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// custom imports
import './index.css';
import './App.css';
import App from './App';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/DashboardPage';
import DetailsPage from './pages/DetailsPage';
import FAQPage from './pages/FAQPage';
import MyAdsPage from './pages/MyAdsPage';
import PrivacyPage from './pages/PrivacyPage';
import SavedPage from './pages/SavedPage';
import ServicesPage from './pages/ServicesPage';
import SettingsPage from './pages/SettingsPage';
import TermsPage from './pages/TermsPage';
import SignupPage from './pages/SignupPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/details",
    element: <DetailsPage />,
  },
  {
    path: "/faq",
    element: <FAQPage />,
  },
  {
    path: "/my-ads",
    element: <MyAdsPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
  {
    path: "/saved",
    element: <SavedPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

