import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Sidebar from "./components/Sidebar";

export default () => (
  <ErrorBoundary>
    <Sidebar />
  </ErrorBoundary>
);
