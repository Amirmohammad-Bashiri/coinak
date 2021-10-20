import styles from "./error-fallback.module.scss";

function ErrorFallback({ resetErrorBoundary }) {
  return (
    <main className={styles.container}>
      <div className={styles.fallback}>
        <h1>Something went wrong!</h1>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </main>
  );
}

export default ErrorFallback;
