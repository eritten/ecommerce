import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import EmailProvider from './context/EmailProvider';

// custom imports
import './index.css';
import './App.css';

const LazyHomePage = React.lazy(() => import('./App'));
const LazyAboutPage = React.lazy(() => import('./pages/AboutPage'));
const LazyContactPage = React.lazy(() => import('./pages/ContactPage'));
const LazyDashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const LazyDetailsPage = React.lazy(() => import('./pages/DetailsPage'));
const LazyFAQPage = React.lazy(() => import('./pages/FAQPage'));
const LazyMyAdsPage = React.lazy(() => import('./pages/MyAdsPage'));
const LazyPrivacyPage = React.lazy(() => import('./pages/PrivacyPage'));
const LazySavedPage = React.lazy(() => import('./pages/SavedPage'));
const LazyServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const LazySettingsPage = React.lazy(() => import('./pages/SettingsPage'));
const LazyTermsPage = React.lazy(() => import('./pages/TermsPage'));
const LazyTipsPage = React.lazy(() => import('./pages/TipsPage'));
const LazySignupPage = React.lazy(() => import('./pages/SignupPage'));
const LazyCodeVerifyPage = React.lazy(() => import('./pages/CodeVerifyPage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyHomePage />
      </React.Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyAboutPage />
      </React.Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyContactPage />
      </React.Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyDashboardPage />
      </React.Suspense>
    )
  },
  {
    path: "/details",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyDetailsPage />
      </React.Suspense>
    )
  },
  {
    path: "/faq",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyFAQPage />
      </React.Suspense>
    ),
  },
  {
    path: "/my-ads",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyMyAdsPage />
      </React.Suspense>
    ),
  },
  {
    path: "/privacy",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyPrivacyPage />
      </React.Suspense>
    ),
  },
  {
    path: "/saved",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazySavedPage />
      </React.Suspense>
    ),
  },
  {
    path: "/signup", 
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazySignupPage />
      </React.Suspense>
    ),
  },
  {
    path: "/services",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyServicesPage />
      </React.Suspense>
    ),
  },
  {
    path: "/settings",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazySettingsPage />
      </React.Suspense>
    ),
  },
  {
    path: "/terms",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyTermsPage />
      </React.Suspense>
    ),
  },
  {
    path: "/tips",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyTipsPage />
      </React.Suspense>
    ),
  },
  {
    path: "/verify",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyCodeVerifyPage />
      </React.Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EmailProvider>
      <RouterProvider router={router} />
    </EmailProvider>
  </React.StrictMode>
);

