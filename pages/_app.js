import { Provider } from "react-redux";

import Layout from "../components/layout/layout";
import { useStore } from "../store";

import "../styles/globals.css";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.trendingCoins);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
