import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// custom imports
import EmailProvider from './context/EmailProvider';
import TokenProvider from './context/TokenProvider';
import FullPageAnimation from './assets/animation/FullPageAnimation';
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
const LazyPostAdPage = React.lazy(() => import('./pages/PostAdPage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazyHomePage />
      </React.Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazyAboutPage />
      </React.Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazyContactPage />
      </React.Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazyDashboardPage />
      </React.Suspense>
    )
  },
  {
    path: "/details",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazyDetailsPage />
      </React.Suspense>
    )
  },
  {
    path: "/faq",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazyFAQPage />
      </React.Suspense>
    ),
  },
  {
    path: "/my-ads",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazyMyAdsPage />
      </React.Suspense>
    ),
  },
  {
    path: "/privacy",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazyPrivacyPage />
      </React.Suspense>
    ),
  },
  {
    path: "/saved",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazySavedPage />
      </React.Suspense>
    ),
  },
  {
    path: "/signup", 
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazySignupPage />
      </React.Suspense>
    ),
  },
  {
    path: "/services",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazyServicesPage />
      </React.Suspense>
    ),
  },
  {
    path: "/settings",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazySettingsPage />
      </React.Suspense>
    ),
  },
  {
    path: "/terms",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazyTermsPage />
      </React.Suspense>
    ),
  },
  {
    path: "/tips",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazyTipsPage />
      </React.Suspense>
    ),
  },
  {
    path: "/verify",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazyCodeVerifyPage />
      </React.Suspense>
    ),
  },
  {
    path: "/post-ad",
    element: (
      <React.Suspense fallback={<FullPageAnimation />}>
        <LazyPostAdPage />
      </React.Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TokenProvider>
    <EmailProvider>
      <RouterProvider router={router} />
    </EmailProvider>
    </TokenProvider>
  </React.StrictMode>
);

