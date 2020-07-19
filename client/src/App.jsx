import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Sidebar from './Sidebar';

export default () => (
  <ErrorBoundary>
    <Sidebar />
  </ErrorBoundary>
);
