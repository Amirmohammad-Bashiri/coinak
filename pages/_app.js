import { Provider } from "react-redux";

import Layout from "../components/layout/layout";
import { store } from "../store";

import "../styles/globals.css";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
