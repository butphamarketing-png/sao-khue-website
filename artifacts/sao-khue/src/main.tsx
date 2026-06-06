import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { setBaseUrl } from "@workspace/api-client-react";

if (import.meta.env.DEV) {
  setBaseUrl("");
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: "20px", 
          fontFamily: "system-ui",
          maxWidth: "600px",
          margin: "0 auto",
          marginTop: "50px"
        }}>
          <h1>Đã xảy ra lỗi</h1>
          <p>{this.state.error?.message || "Lỗi không xác định"}</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              cursor: "pointer"
            }}
          >
            Tải lại trang
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
