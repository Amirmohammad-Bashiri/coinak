import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";

import Navbar from "../navbar/navbar";
import ErrorFallback from "@components/error-fallback/error-fallback";

function layout({ children }) {
  const handleReset = () => {
    document.location.href = "/";
  };

  return (
    <div>
      <Head>
        <title>Coinak | Get Latest Crypto Info</title>
      </Head>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
        <Navbar />
        {children}
      </ErrorBoundary>
    </div>
  );
}

export default layout;
